import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, debounceTime, map, takeUntil, tap } from 'rxjs';
import { MockNote, Note } from '../../models/note.model'
import { selectAllNoteIds, selectSelectedNote, selectStatus } from '../../selectors/notes/notes.selectors';
import { addNote, deleteNote, loadAllNotes, saveNote, selectNote, updateNote } from '../../actions/notes/notes.actions';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book, MockBook } from '../../models/book.model';
import { IResource } from '../../models/resource.interface';
import { RelationService } from '../../services/relations.service';

@Component({
  selector: 'frontend-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnDestroy {
  id$: Observable<number>;
  id = 0;
  note$: Observable<Note | null> = this.store.select(selectSelectedNote)
  noteIds$: Observable<number[] | null> = this.store.select(selectAllNoteIds)
  status$: Observable<string> = this.store.select(selectStatus)  
  username = ''
  noteForm: FormControl
  contentForm: FormControl
  noteGroup: FormGroup
  title$: Observable<string> | undefined
  content$: Observable<string> | undefined
  private destroy$: Subject<void> = new Subject<void>();
  updateRelatedResourcesEvent: EventEmitter<Observable<IResource[]>> = new EventEmitter<Observable<IResource[]>>();
  note: Note = MockNote
  book: Book = MockBook
  pointer = true
  editMode = false
  relations$!: Observable<IResource[]>

  constructor (
    private route: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private relationService: RelationService
  ) {
    this.id$ = this.route.params.pipe(
      map(params => params['id']),
      tap(id => {
        this.store.dispatch(selectNote({id: Number(id)}))
        this.id = id
        console.log('id', this.id)
        this.relations$ = this.relationService.getRelationsForResource('note', id).pipe(
          tap(relations => console.log('relations', relations)),
          takeUntil(this.destroy$)
        )
        this.relations$.subscribe()
        this.updateRelatedResourcesEvent.emit(this.relations$)
      })
    );
    this.noteForm = this.fb.control('')
    this.contentForm = this.fb.control('')

    this.noteGroup = this.fb.group({
      title: this.noteForm,
      content: this.contentForm,
    })
    this.title$ = this.noteGroup.get('title')?.valueChanges.pipe()
    this.content$ = this.noteGroup.get('content')?.valueChanges.pipe()

    this.noteGroup.valueChanges.pipe(
      debounceTime(2000),
      tap(value => {
        console.log(value),
        this.store.dispatch(saveNote({
          note: value
        }))
      }),
      takeUntil(this.destroy$),
    ).subscribe()

    this.note$.pipe(
      tap(note => {
        if (note) {
          this.router.navigate(['/notes', note.id]) 
        } 
      }),
      takeUntil(this.destroy$),
    ).subscribe()

    this.status$.pipe(
      tap(status => {
        if (status === 'delete') {
          this.router.navigate(['/notes'])
        }
      }),
      takeUntil(this.destroy$),
    ).subscribe()
  }

  changeEditMode() {
    this.editMode = !this.editMode
  }

  deleteNote() {
    this.store.dispatch(deleteNote({ id: this.id }))
    this.router.navigate(['/notes'])
  }

  changeResource() {
    this.pointer = !this.pointer
    this.note.id = this.note.id + 1
    if (this.pointer === true) {
      this.note.id = this.note.id + 12
      this.note.addRelated(JSON.parse(JSON.stringify(this.note)))
    } else {
      this.book.id = this.book.id + 11
      this.note.addRelated(JSON.parse(JSON.stringify(this.book)))
    }
    
    this.store.dispatch(addNote({ note: JSON.parse(JSON.stringify(this.note)) }))
    this.store.dispatch(selectNote({ id: this.note.id }))
  }
  
  ngOnInit() {
    this.store.dispatch(loadAllNotes());
    
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, debounceTime, map, takeUntil, tap } from 'rxjs';
import { Note } from '../../models/note.model'
import { selectAllNoteIds, selectSelectedNote, selectStatus } from '../../selectors/notes/notes.selectors';
import { deleteNote, loadAllNotes, saveNote, selectNote } from '../../actions/notes/notes.actions';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  constructor (
    private route: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.id$ = this.route.params.pipe(
      map(params => params['id']),
      tap(id => {
        this.store.dispatch(selectNote({id: Number(id)}))
        this.id = id
        console.log(this.id)
      })
    );
    this.noteForm = this.fb.control('')
    this.contentForm = this.fb.control('')

    this.noteGroup = this.fb.group({
      title: this.noteForm,
      content: this.contentForm,
    })
    this.title$ = this.noteGroup.get('title')?.valueChanges.pipe(
      // debounceTime(1000),
    )
    this.content$ = this.noteGroup.get('content')?.valueChanges.pipe(
      // map(value => value.toUpperCase())
    )

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

  deleteNote() {
    this.store.dispatch(deleteNote({ id: this.id }))
    this.router.navigate(['/notes'])
  }

  ngOnInit() {
    this.store.dispatch(loadAllNotes());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
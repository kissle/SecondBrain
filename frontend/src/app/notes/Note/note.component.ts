import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { Note } from '../../models/note.model'
import { selectSelectedNote, selectStatus } from '../../selectors/notes/notes.selectors';
import { deleteNote, loadAllNotes, selectNote } from '../../actions/notes/notes.actions';

@Component({
  selector: 'frontend-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnDestroy {
  id$: Observable<number>;
  id = 0;
  note$: Observable<Note | null> = this.store.select(selectSelectedNote)
  status$: Observable<string> = this.store.select(selectStatus)  

  title$: Observable<string> | undefined
  content$: Observable<string> | undefined
  private destroy$: Subject<void> = new Subject<void>();

  constructor (
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {
    this.id$ = this.route.params.pipe(
      map(params => params['id']),
      tap(id => {
        this.store.dispatch(selectNote({id: Number(id)}))
        this.id = id
      }),
      takeUntil(this.destroy$),
    );

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

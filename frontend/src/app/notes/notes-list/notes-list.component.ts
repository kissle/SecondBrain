import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllNotes, selectInitialized } from '../../selectors/notes/notes.selectors';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Note } from '../../models/note.model';
import { deleteNote, deselectNote, loadAllNotes } from '../../actions/notes/notes.actions';
import { Book } from '../../models/book.model';

@Component({
  selector: 'frontend-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit, OnDestroy {
  notes$: Observable<Note[]> = this.store.select(selectAllNotes);  
  initialized$: Observable<boolean> = this.store.select(selectInitialized);
  initialized = false;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store
  ) {
    this.initialized$.pipe(
      tap(initialized => this.initialized = initialized),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  deleteNote(id: number) {
    this.store.dispatch(deleteNote({id}));
    console.log('deleteNote', id)
  }

  ngOnInit() {
    if (!this.initialized) {
      this.store.dispatch(loadAllNotes());
    }
    this.store.dispatch(deselectNote());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

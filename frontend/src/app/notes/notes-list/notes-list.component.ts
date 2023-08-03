import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllNotes } from '../../selectors/notes/notes.selectors';
import { Observable } from 'rxjs';
import { Note } from '../../models/note.model';
import { deleteNote, deselectNote, loadAllNotes } from '../../actions/notes/notes.actions';

@Component({
  selector: 'frontend-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notes$: Observable<Note[]> = this.store.select(selectAllNotes);

  constructor(
    private store: Store,
  ) {}

  deleteNote(id: number) {
    this.store.dispatch(deleteNote({id}));
    console.log('deleteNote', id)
  }

  ngOnInit() {
    this.store.dispatch(loadAllNotes());
    this.store.dispatch(deselectNote());
  }
}

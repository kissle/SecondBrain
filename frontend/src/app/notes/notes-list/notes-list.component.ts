import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllNotes } from '../../selectors/notes/notes.selectors';
import { Observable } from 'rxjs';
import { Note } from '../../models/note.model';
import { loadAllNotes } from '../../actions/notes/notes.actions';

@Component({
  selector: 'frontend-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notes$: Observable<Note[]> = this.store.select(selectAllNotes);

  constructor(
    private store: Store,
  ) {

  }

  ngOnInit() {
    this.store.dispatch(loadAllNotes());
  }
}

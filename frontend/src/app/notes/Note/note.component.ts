import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Note } from '../../models/note.model'
import { selectSelectedNote } from '../../selectors/notes/notes.selectors';
import { NotesService } from '../../services/notes.service'
import { loadAllNotes } from '../../actions/notes/notes.actions';



@Component({
  selector: 'frontend-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  id$: Observable<number>;
  note$: Observable<Note> = this.store.select(selectSelectedNote)

  constructor (
    private route: ActivatedRoute,
    private store: Store,
    private notesService: NotesService
  ) {
    this.id$ = this.route.params.pipe(map(params => params['id']));

    this.note$.subscribe(note => console.log(note))

  }

  ngOnInit() {
    // this.notesService.getAllNotes().subscribe(notes => console.log(notes))
    this.store.dispatch(loadAllNotes());
  }

}

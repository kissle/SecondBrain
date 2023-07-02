import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, combineLatest, map, switchMap, tap } from 'rxjs';
import { Note } from '../../models/note.model'
import { selectAllNotes, selectSelectedNote } from '../../selectors/notes/notes.selectors';
import { NotesService } from '../../services/notes.service'
import { loadAllNotes, selectNote } from '../../actions/notes/notes.actions';



@Component({
  selector: 'frontend-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  id$: Observable<number>;
  note$: Observable<Note | null> = this.store.select(selectSelectedNote)
  // notes$: Observable<Note[]>

  constructor (
    private route: ActivatedRoute,
    private store: Store,
    private notesService: NotesService
  ) {
    this.id$ = this.route.params.pipe(
      map(params => params['id']),
      tap(id => {
        this.store.dispatch(selectNote({id: Number(id)}))
    }));
    // this.note$.subscribe(note => console.log(note))
    // this.notes$ = combineLatest([this.id$, this.store.select(selectAllNotes)]).pipe(
    //   map(([id, notes]) => {
    //     if (notes.length > 0) {
    //       console.log(id, notes)
    //       return notes.filter(note => note.id === Number(id))
    //     } else {
    //       return []
    //     }
    //   }
    // ))
  }

  ngOnInit() {

    // this.store.dispatch(selectNote({id: this.id}))
    this.store.dispatch(loadAllNotes());
  }

}

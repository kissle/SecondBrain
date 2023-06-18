import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError,  exhaustMap, map,  tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { loadAllNotes, loadAllNotesSuccess } from '../../actions/notes/notes.actions';
import { NotesService } from '../../services/notes.service';

@Injectable()
export class NotesEffects {

  loadAllNotesEffect$ = createEffect(() =>
    this.actions$.pipe(
      tap(() => console.log('Effect')),
      ofType(loadAllNotes),
      exhaustMap(() => this.notesService.getAllNotes()
        .pipe(
          tap(() => console.log('Loading Books')),
          map((notes) => loadAllNotesSuccess({ notes })),
          catchError(() => EMPTY)
      ))
    )
    )
  
  constructor(private actions$: Actions, private notesService: NotesService) {}
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError,  exhaustMap, map,  tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { addNoteToResource, deleteNote, deleteNoteSuccess, loadAllNotes, loadAllNotesSuccess, saveNote, saveNoteSuccess } from '../../actions/notes/notes.actions';
import { NotesService } from '../../services/notes.service';
import { RelationService } from '../../services/relations.service';

@Injectable()
export class NotesEffects {

  loadAllNotesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllNotes),
      exhaustMap(() => this.notesService.getAllNotes()
        .pipe(
          tap(() => console.log('Loading Notes')),
          map((notes) => loadAllNotesSuccess({ notes })),
          catchError(() => EMPTY)
      ))
    )
    )
  
  saveNoteEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveNote),
      exhaustMap(({ note }) => this.notesService.createNewNote(note)
        .pipe(
          tap(() => console.log('Saving Note')),
          map((note) => saveNoteSuccess({ note })),
          catchError(() => EMPTY)
      ))
    )
    )
  
  deleteNoteEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteNote),
      exhaustMap(({ id }) => this.notesService.deleteNoteById(id)
        .pipe(
          tap(() => console.log('Deleting Note')),
          map(() => {
            console.log('deleteNoteSuccess')
            return deleteNoteSuccess()
          }),
          catchError(() => EMPTY)
      ))
    )
    )

  addNoteToResourceEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addNoteToResource),
      exhaustMap(({ content_type, id, note }) => this.relationService.addNoteToResource(content_type, id, note)
        .pipe(
          tap(() => console.log('Saving Note')),
          map((note) => saveNoteSuccess({ note })),
          catchError(() => EMPTY)
      ))
    )
    )
    
  constructor(
    private actions$: Actions, 
    private notesService: NotesService,
    private relationService: RelationService
    ) {}
}

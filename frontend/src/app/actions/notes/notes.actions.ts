import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Note } from '../../models/note.model';

export const NotesActions = createActionGroup({
  source: 'Notes',
  events: {
    'Load Notes': emptyProps(),
    
    
  }
});


export const loadAllNotes = createAction('[Notes] Load All Notes');

export const loadAllNotesSuccess = createAction(
  '[Notes] Load All Notes Success',
  props<{ notes: Note[] }>()
);

export const loadAllNotesFailure = createAction(
  '[Notes] Load All Notes Failure',
  props<{ error: any }>()
);

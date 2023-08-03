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

export const selectNote = createAction(
  '[Notes] Select Note',
  props<{ id: number }>()
);

export const deselectNote = createAction(
  '[Notes] Deselect Note'
);

export const saveNote = createAction(
  '[Notes] Save Note',
  props<{ note: Note }>()
);

export const saveNoteSuccess = createAction(
  '[Notes] Save Note Success',
  props<{ note: Note }>()
);

export const deleteNote = createAction(
  '[Notes] Delete Note',
  props<{ id: number }>()
);

export const deleteNoteSuccess = createAction(
  '[Notes] Delete Note Success'
);
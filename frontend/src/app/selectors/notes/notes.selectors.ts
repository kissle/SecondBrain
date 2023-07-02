import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNotes from '../../reducers/notes/notes.reducer';

export const selectNotesState = createFeatureSelector<fromNotes.NoteState>(
  fromNotes.notesFeatureKey
);

export const selectStatus = createSelector(
  selectNotesState,
  (state: fromNotes.NoteState) => state.status
);

export const selectSelectedNote = createSelector(
  selectNotesState,
  (state: fromNotes.NoteState) => state.selectedNote
);

export const selectAllNotes = createSelector(
  selectNotesState,
  (state: fromNotes.NoteState) => state.notes
);
import { createFeature, createReducer, on } from '@ngrx/store';

import { Note } from '../../models/note.model';
import { NotesActions, loadAllNotesSuccess } from '../../actions/notes/notes.actions';

export const notesFeatureKey = 'notes';

export interface NoteState {
  status: string;
  selectedNote: Note;
  notes: Note[];
}

export const initialState: NoteState = {
  status: 'initial',
  selectedNote: new Note(0, 'Super Title', 'Super Content'),
  notes: []
};

export const reducer = createReducer(
  initialState,
  on(NotesActions.loadNotes, state => state),
  on(loadAllNotesSuccess, (state, { notes }) => ({
    ...state,
    notes: notes,
    status: 'success',
    selectedNote: notes[notes.length - 1]
  })), 
);

export const notesFeature = createFeature({
  name: notesFeatureKey,
  reducer,
});


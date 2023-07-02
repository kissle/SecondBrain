import { createFeature, createReducer, on, select } from '@ngrx/store';

import { Note } from '../../models/note.model';
import { NotesActions, loadAllNotesSuccess, selectNote } from '../../actions/notes/notes.actions';

export const notesFeatureKey = 'notes';

export interface NoteState {
  status: string;
  selectedNote: Note | null;
  notes: Note[];
}

export const initialState: NoteState = {
  status: 'initial',
  selectedNote: null,
  notes: []
};

export const reducer = createReducer(
  initialState,
  on(NotesActions.loadNotes, state => state),
  on(loadAllNotesSuccess, (state, { notes }) => ({
    ...state,
    notes: notes,
    status: 'success'
  })), 
  on(selectNote, (state, { id }) => ({
    ...state,
    selectedNote: state.notes.filter(note => note.id === id)[0],
  }))
  
);

export const notesFeature = createFeature({
  name: notesFeatureKey,
  reducer,
});


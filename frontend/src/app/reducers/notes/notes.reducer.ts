import { createFeature, createReducer, on, select } from '@ngrx/store';

import { Note } from '../../models/note.model';
import { NotesActions, deleteNote, deleteNoteSuccess, deselectNote, loadAllNotesSuccess, saveNote, saveNoteSuccess, selectNote } from '../../actions/notes/notes.actions';

export const notesFeatureKey = 'notes';

export interface NoteState {
  status: string;
  selectedNote: Note | null;
  notes: Note[];
  noteToSave: Note | null;
  noteIdToDelete: number | null;
}

export const initialState: NoteState = {
  status: 'initial',
  selectedNote: null,
  notes: [],
  noteToSave: null,
  noteIdToDelete: null,
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
  })),
  on(deselectNote, (state) => ({
    ...state,
    selectedNote: null,
  })),
  on(saveNote, (state, { note }) => ({
    ...state,
    status: 'saving',
    noteToSave: note,
  })),
  on(saveNoteSuccess, (state, { note }) => ({
    ...state,
    status: 'success',
    selectedNote: note,
    noteToSave: null,
    notes: [...state.notes, note]
  })),
  on(deleteNote, (state, { id }) => ({
    ...state,
    status: 'deleting',
    noteIdToDelete: id,
  })),
  on(deleteNoteSuccess, (state) => ({
    ...state,
    status: 'success',
    notes: state.notes.filter(note => note.id !== state.noteIdToDelete),
    noteIdToDelete: null,
    selectedNote: null,
  })),
);

export const notesFeature = createFeature({
  name: notesFeatureKey,
  reducer,
});


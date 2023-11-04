import { createFeature, createReducer, on, select } from '@ngrx/store';

import { Note } from '../../models/note.model';
import { NotesActions, addNote, deleteNote, deleteNoteSuccess, deselectNote, loadAllNotesSuccess, saveNote, saveNoteSuccess, selectNote, updateNote } from '../../actions/notes/notes.actions';

export const notesFeatureKey = 'notes';

export interface NoteState {
  initialized: boolean;
  status: string;
  selectedNote: Note | null;
  notes: Note[];
  noteToSave: Note | null;
  noteIdToDelete: number | null;
}

export const initialState: NoteState = {
  initialized: false,
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
    status: 'success',
    initialized: true
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
  })),
  on(updateNote, (state, { id, note }) => ({
    ...state,
    status: 'updating',
    selectedNote: note,
    notes: state.notes.map(n => n.id === id ? note : n),
  })),
  on(addNote, (state, { note }) => ({
    ...state,
    status: 'adding',
    notes: [...state.notes, note],
  })),
);

export const notesFeature = createFeature({
  name: notesFeatureKey,
  reducer,
});


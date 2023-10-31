import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`/api/notes/`)
  }

  getNoteById(id: number): Observable<Note> {
    return this.http.get<Note>(`/api/notes/${id}/`)
  }

  createNewNote(note: Note): Observable<Note> {
    console.log('asdf', note)
    return this.http.post<Note>(`/api/notes/`, note, httpOptions)
  }

  deleteNoteById(id: number): Observable<void> {
    return this.http.delete<void>(`/api/notes/${id}/`)
  }
}

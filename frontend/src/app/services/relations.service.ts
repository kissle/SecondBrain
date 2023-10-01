import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, map, tap } from 'rxjs';
import { Note } from '../models/note.model';
import { IRelationsDto } from '../models/relations.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RelationService {
  constructor(
    private http: HttpClient,
  ) { }

  getRelationsForResource(content_type: string, id: number): Observable<IRelationsDto> {
    console.log('getRelationsForResource', content_type, id)
    const url = `/api/${content_type}s/${id}/relations`
    return this.http.get<IRelationsDto>(url, {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }),
    }).pipe(
      tap(data => console.log('Data received:', data)),
      catchError(error => {
          console.error('Error:', error);
          throw error;
      })
    )
  }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`/api/notes`)
  }

  getNoteById(id: number): Observable<Note> {
    return this.http.get<Note>(`/api/notes/${id}`)
  }

  createNewNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`/api/notes/`, note, httpOptions)
  }

  deleteNoteById(id: number): Observable<void> {
    return this.http.delete<void>(`/api/notes/${id}`)
  }
}

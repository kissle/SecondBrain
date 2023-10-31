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
    const url = `/api/${content_type}s/${id}/relations/`
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

  addNoteToResource (content_type: string, id: number, note: Note): Observable<Note> {
    const url = `/api/${content_type}s/${id}/add_note/`
    return this.http.post<Note>(url, note, httpOptions).pipe(
      tap((newNote: Note) => console.log(`added note w/ id=${newNote.id}`)),
      catchError(error => {
          console.error('Error:', error);
          throw error;
      })
    )
  }
}

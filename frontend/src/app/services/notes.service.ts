import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';
import { APP_BASE_HREF } from '@angular/common';

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
    return this.http.get<Note[]>(`/api/notes`)
  }
}

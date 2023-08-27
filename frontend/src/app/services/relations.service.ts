import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, map, tap } from 'rxjs';
import { Note } from '../models/note.model';
import { IResource } from '../models/resource.interface';
import { Relation, RelationContainer } from '../models/relations.model';

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

  getRelationContainerForResource(content_type: string, id: number): Observable<RelationContainer | undefined> {
    return this.http.get<RelationContainer[]>(`/api/relationscontainers/?search=${content_type}`)
      .pipe(
        map((relationContainers: RelationContainer[]) => relationContainers.find((relationContainer: RelationContainer) => relationContainer.object_id === Number(id))
      ))
  }
  
  getRelationContainerForResource2(content_type: string, id: number): Observable<RelationContainer | undefined> {
    return this.http.get<RelationContainer[]>(`/api/relationscontainers/?search=${content_type}&object_id=${id}`)
      .pipe(
        tap(value => console.log('getRelationContainerForResource2', id, value.find(object => object.object_id === Number(id)))),
        map((relationContainers: RelationContainer[]) => relationContainers[0]) 
      )
  }

  getRelationsForResource(content_type: string, id: number): Observable<IResource[]> {
    console.log('getRelationsForResource', content_type, id)
    const url = `/api/${content_type}s/${id}/relations`
    return this.http.get<IResource[]>(url, {
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Book } from '../models/book.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly http: HttpClient) { }

  public getAllBooks (): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books/')
    .pipe(
      tap(data => console.log('Data received:', data)),
      catchError(error => {
          console.error('Error:', error);
          throw error;
      })
    )
  }
}

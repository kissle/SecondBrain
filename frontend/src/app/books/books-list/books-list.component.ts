import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Observable, Subject } from 'rxjs';
import { IBook } from '../../models/book.model';

@Component({
  selector: 'frontend-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit, OnDestroy {
  books$!: Observable<IBook[]>
  destroy$ = new Subject<void>();
  
  constructor(private readonly booksService: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.booksService.getAllBooks()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

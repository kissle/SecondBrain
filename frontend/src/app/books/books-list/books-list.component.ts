import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Observable, Subject } from 'rxjs';
import { IBook } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'frontend-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit, OnDestroy {
  books$!: Observable<IBook[]>
  destroy$ = new Subject<void>();
  
  constructor(
    private readonly booksService: BooksService,
    private readonly router: Router
    ) {}

  openDetails(id: number): void {
    this.router.navigate(['books', id])
  }

  ngOnInit(): void {
    this.books$ = this.booksService.getAllBooks()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

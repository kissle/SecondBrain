import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'frontend-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book$!: Observable<Book>
  id!: number

  constructor(
    private readonly booksService: BooksService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get('id'))
      this.book$ = this.booksService.getBookById(this.id)
  }
}

import { Component, Input } from '@angular/core';
import { Book, IBook, MockBook } from '../../models/book.model'
import { Router } from '@angular/router';

@Component({
  selector: 'frontend-book-preview-component',
  templateUrl: './book-preview-component.component.html',
  styleUrls: ['./book-preview-component.component.scss']
})
export class BookPreviewComponent {
  @Input() book: Book = MockBook
  resource!: IBook


  constructor(private router: Router) { }

  addNote(id: number) {
    console.log('add note to book with id ' + id)
  }

  showDetails(id: number): void {
    this.router.navigate(['/books', id])
  }
}

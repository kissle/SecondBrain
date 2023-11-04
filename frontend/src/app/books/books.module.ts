import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { ComponentsModule } from '../components/components.module';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [BooksListComponent, BookComponent],
  imports: [
    CommonModule, 
    BooksRoutingModule,
    ComponentsModule
  ],
  exports: [BooksListComponent, BookComponent],
})
export class BooksModule {}

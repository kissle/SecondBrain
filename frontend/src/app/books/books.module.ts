import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [BooksListComponent],
  imports: [
    CommonModule, 
    BooksRoutingModule,
    ComponentsModule
  ],
  exports: [BooksListComponent],
})
export class BooksModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  {
    path: ':id',
    component: BookComponent
  },
  {
    path: '**',
    redirectTo: 'notes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

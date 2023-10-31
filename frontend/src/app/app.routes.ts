import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'notes',
        loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
    },
    {
        path: 'books',
        loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
    }
];

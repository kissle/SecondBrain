import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'notes',
        loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule)
    },
];

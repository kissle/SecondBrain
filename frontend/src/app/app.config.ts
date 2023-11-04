import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromNotes from './reducers/notes/notes.reducer'
import { NotesEffects } from './effects/notes/notes.effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CsrfInterceptorFn } from './services/csrf.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(NotesEffects),
    provideStore(),
    provideState('notes', fromNotes.notesFeature.reducer),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptors([CsrfInterceptorFn])),
    
  ],
};

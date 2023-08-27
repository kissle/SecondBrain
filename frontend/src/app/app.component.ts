import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectInitialized, selectNoteIdToDelete, selectStatus } from './selectors/notes/notes.selectors';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './services/notes.service';
import { environment } from '../../environment';
import { UiModule } from '@frontend/ui';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    UiModule,
    CommonModule
  ],
  selector: 'frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    NotesService,
    {
      provide: APP_BASE_HREF, useValue: environment.baseUrl
    }
  ]
})
export class AppComponent {
  title = 'frontend';
  status$: Observable<string> = this.store.select(selectStatus);
  initialized$: Observable<boolean> = this.store.select(selectInitialized);
  selectNoteIdToDelete$: Observable<number | null> = this.store.select(selectNoteIdToDelete);

  constructor(
    private store: Store
  ) { }
}

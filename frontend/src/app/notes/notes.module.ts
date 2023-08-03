import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent } from './Note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormsModule } from '@angular/forms';
import { UiModule } from '@frontend/ui';

@NgModule({
  declarations: [NoteComponent, NotesListComponent],
  imports: [
    CommonModule, 
    NotesRoutingModule, 
    HttpClientModule,
    FormsModule,
    UiModule
  ],
  exports: [NoteComponent, NotesListComponent],
  providers: [],
})
export class NotesModule {}

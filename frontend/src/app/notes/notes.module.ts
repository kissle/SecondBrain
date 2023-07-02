import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent } from './Note/note.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './notes-list/notes-list.component';

@NgModule({
  declarations: [NoteComponent, NotesListComponent],
  imports: [CommonModule, NotesRoutingModule, HttpClientModule],
  exports: [NoteComponent, NotesListComponent],
  providers: [],
})
export class NotesModule {}

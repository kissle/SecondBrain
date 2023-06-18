import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent } from './Note/note.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NoteComponent
  ],
  imports: [
    CommonModule, 
    NotesRoutingModule,
    HttpClientModule
  ],
  exports: [NoteComponent],
  providers: []
})
export class NotesModule {}

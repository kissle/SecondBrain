import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPreviewComponent } from './book-preview-component/book-preview-component.component';
import { NotePreviewComponent } from './note-preview-component/note-preview-component.component';
import { RelatedPreviewComponent } from './related-preview/related-preview.component';

@NgModule({
  declarations: [
    BookPreviewComponent,
    NotePreviewComponent,
    RelatedPreviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookPreviewComponent,
    NotePreviewComponent,
    RelatedPreviewComponent
  ]
})
export class ComponentsModule { 

}

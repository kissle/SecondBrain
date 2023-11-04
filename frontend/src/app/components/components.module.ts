import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPreviewComponent } from './book-preview-component/book-preview-component.component';
import { NotePreviewComponent } from './note-preview-component/note-preview-component.component';
import { RelatedPreviewComponent } from './related-preview/related-preview.component';
import { NoteSaveComponent } from './note-save/note-save.component';
import { UiModule } from '@frontend/ui';

@NgModule({
  declarations: [
    BookPreviewComponent,
    NotePreviewComponent,
    RelatedPreviewComponent,
    NoteSaveComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    BookPreviewComponent,
    NotePreviewComponent,
    RelatedPreviewComponent,
    NoteSaveComponent
  ],
})
export class ComponentsModule {}

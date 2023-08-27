import { BookPreviewComponent } from "../components/book-preview-component/book-preview-component.component";
import { NotePreviewComponent } from "../components/note-preview-component/note-preview-component.component";

import { Type } from '@angular/core';

interface ComponentMapping {
    [key: string]: Type<any>;
}

export const COMPONENT_MAPPING: ComponentMapping = {
    note: NotePreviewComponent,
    book: BookPreviewComponent,
};
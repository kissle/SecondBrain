import { Component, Input } from '@angular/core';
import { INote, MockNote, Note } from '../../models/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'frontend-note-preview-component',
  templateUrl: './note-preview-component.component.html',
  styleUrls: ['./note-preview-component.component.scss']
})
export class NotePreviewComponent{
  @Input() note: Note = MockNote
  countRelated = this.note.related.length
  resource!: INote

  constructor(
    private router: Router
  ) {}

  addNote(id: number) {
    console.log('add note to note with id ' + id)
  }

  showDetails(id: number) {
    this.router.navigate(['/notes', id])
  }
}
 
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveNote } from '../../actions/notes/notes.actions'
import { FieldConfig } from 'ui/src/lib/forms/models/field-config';
import { noWhitespaceValidator } from 'ui/src/lib/forms/validators/custom-validators';

@Component({
  selector: 'frontend-note-save',
  templateUrl: './note-save.component.html',
  styleUrls: ['./note-save.component.scss'],
})
export class NoteSaveComponent {

  constructor(
    private store: Store
  ) {}

  formFields: FieldConfig[] = [
    { type: 'text', label: 'Title', name: 'title', validators: []},
    { type: 'textarea', label: 'Content', name: 'content', validators: [noWhitespaceValidator()] }
  ];

  updateForm(form: FormGroup) {
    this.store.dispatch(saveNote({
      note: form.value
    }))
    console.log('updateForm', form.value)
  }
}

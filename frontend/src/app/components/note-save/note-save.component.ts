import { Component, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveNote, addNoteToResource } from '../../actions/notes/notes.actions'
import { FieldConfig } from 'ui/src/lib/forms/models/field-config';
import { noWhitespaceValidator } from 'ui/src/lib/forms/validators/custom-validators';
import { IResource } from '../../models/resource.interface';
import { DynamicFormComponent } from '@frontend/ui';

@Component({
  selector: 'frontend-note-save',
  templateUrl: './note-save.component.html',
  styleUrls: ['./note-save.component.scss'],
})
export class NoteSaveComponent {
  @Input() resource!: IResource | null;
  
  form!: FormGroup;
  reset = new EventEmitter<void>();
  @ViewChild(DynamicFormComponent, { static: false }) dynamicForm!: DynamicFormComponent;

  constructor(
    private store: Store
  ) {
    this.reset.subscribe(() => {
      this.form.reset();
    })
  }

  formFields: FieldConfig[] = [
    { type: 'text', label: 'Title', name: 'title', validators: []},
    { type: 'textarea', label: 'Content', name: 'content', validators: [noWhitespaceValidator()] }
  ];

  updateForm(form: FormGroup) {
    this.form = form;
  }

  saveNote() {
    this.store.dispatch(saveNote({
      note: this.form.value
    }))
    this.dynamicForm.form.reset();
  }

  addNoteToResource() {
    if (this.resource !== null) {
      this.store.dispatch(
        addNoteToResource({
          content_type: this.resource.polymorphic_ctype.model,
          id: this.resource.id,
          note: this.form.value
        })
      )
      this.dynamicForm.form.reset();
    }
  } 
}

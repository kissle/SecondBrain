import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FieldConfig } from '../models/field-config';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'frontend-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnChanges {
  @Input() fields: FieldConfig[] = [];
  @Output() formSaved = new EventEmitter<FormGroup>();
  form: FormGroup = new FormGroup({});

  ngOnChanges() {
    this.fields.forEach(field => {
      this.form.addControl(
        field.name,
        new FormControl(field.defaultValue || '', 
        field.validators || [])
      );
    });
  }

  saveForm(): void {
    this.formSaved.emit(this.form);
    this.form.reset();
  }
}


import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { FieldConfig } from '../models/field-config';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, debounceTime, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'frontend-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnChanges, OnDestroy {
  @Input() fields: FieldConfig[] = [];
  @Output() formSaved = new EventEmitter<FormGroup>();
  
  form: FormGroup = new FormGroup({});
  destroy$ = new Subject<void>();

  ngOnChanges() {
    this.fields.forEach(field => {
      this.form.addControl(
        field.name,
        new FormControl(field.defaultValue || '', 
        field.validators || [])
      );
    });

    this.form.valueChanges.pipe(
      debounceTime(100),
      tap(form => console.log('updating form', form)),
      tap(() => this.formSaved.emit(this.form)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}


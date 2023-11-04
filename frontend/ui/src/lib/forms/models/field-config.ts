import { ValidatorFn } from "@angular/forms";

export interface FieldConfig {
    type: 'text' | 'number' | 'password' | 'checkbox' | 'textarea' | 'select';
    label?: string;
    name: string;
    options?: string[]; // for select type
    defaultValue?: any;
    validators?: ValidatorFn[];
  }
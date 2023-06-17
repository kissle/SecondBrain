import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'frontend-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string | undefined;
  @Input() type: 'text' | 'number' | 'url' = 'text';
  @Input() control: FormControl = new FormControl();
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<void>();

  onTouched: any = () => {
    this.blur.emit();
  };

  writeValue(value: string): void {
    this.control.setValue(value);
  } 

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
      isDisabled ? this.control.disable() : this.control.enable();
  }
}

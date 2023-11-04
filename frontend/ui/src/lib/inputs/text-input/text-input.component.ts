import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'frontend-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() label: string | undefined;
  @Input() type: 'text' | 'number' | 'url' = 'text';
  @Input() control: FormControl = new FormControl() ;
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

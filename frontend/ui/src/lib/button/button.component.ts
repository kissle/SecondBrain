import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'frontend-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type!: 'primary' | 'secondary' | 'danger';
  @Input() disabled!: boolean;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() click = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }

  get dynamicColors(): string {
    switch (this.type) {
      case 'primary':
        if (this.disabled) {
          return 'bg-blue-200 text-white cursor-not-allowed';
        }
        return 'bg-blue-500 hover:bg-blue-700 text-white';
      case 'secondary':
        if (this.disabled) {
          return 'bg-gray-200 text-white cursor-not-allowed';
        }
        return 'bg-gray-500 hover:bg-gray-700 text-white';
      case 'danger':
        if (this.disabled) {
          return 'bg-red-200 text-white cursor-not-allowed';
        }
        return 'bg-red-500 hover:bg-red-700 text-white';
      default:
        if (this.disabled) {
          return 'bg-blue-200 text-white cursor-not-allowed';
        }
        return 'bg-blue-500 hover:bg-blue-700 text-white';
    }
  }
}

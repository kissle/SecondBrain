import { Meta, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

export default {
  title: 'InputComponent',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule
      ]
    })
  ]
} as Meta<InputComponent>;

export const Primary = {
  render: (args: InputComponent) => ({
    props: args,
  }),
  args: {
    label: 'Input label',
    type: 'text',
    control: new FormControl(''),
  },
};

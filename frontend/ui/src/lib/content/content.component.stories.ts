import { Meta, moduleMetadata } from '@storybook/angular';
import { ContentComponent } from './content.component';
import { UiModule } from '../ui.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'ContentComponent',
  component: ContentComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        UiModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatFormFieldModule
      ]
    })
  ]
} as Meta<ContentComponent>;

export const Primary = {
  render: (args: ContentComponent) => ({
    props: args,
  }),
  args: {
    label: 'Input label',
  },
};

import { Meta, moduleMetadata } from '@storybook/angular';
import { ContentComponent } from './content.component';
import { UiModule } from '../ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export default {
  title: 'ContentComponent',
  component: ContentComponent,
  decorators: [
    moduleMetadata({
      imports: [
        UiModule,
        BrowserAnimationsModule,
        MatInputModule,
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

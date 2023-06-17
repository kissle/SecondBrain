import { Meta, moduleMetadata } from '@storybook/angular';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';
import { NavbarComponent } from '../navbar/navbar.component';


export default {
  title: 'LayoutComponent',
  component: LayoutComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ContentComponent
      ],
      imports: [
        NavbarComponent
      ]
    })
  ]
}  as Meta<LayoutComponent>;

export const Primary = {
  render: (args: LayoutComponent) => ({
    props: args,
  }),
  args: {
    brand_name: 'HELLO WORLD'
  },
};

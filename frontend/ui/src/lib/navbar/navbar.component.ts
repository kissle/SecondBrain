import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'frontend-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavbarComponent {

  @Input() brand_name = 'Brand Name'

}

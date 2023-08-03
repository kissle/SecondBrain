import { Component, Input } from '@angular/core';

@Component({
  selector: 'frontend-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title = 'frontend';
}

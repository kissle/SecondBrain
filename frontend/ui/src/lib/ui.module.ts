import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextInputComponent } from './inputs/text-input/text-input.component';
import { NumberInputComponent } from './inputs/number-input/number-input.component';
import { DynamicFormComponent } from './forms/dynamic-form/dynamic-form.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    InputComponent,
    TextInputComponent,
    NumberInputComponent,
    DynamicFormComponent,
    ButtonComponent,
  ],
  exports: [
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    RouterModule,
    InputComponent,
    TextInputComponent,
    NumberInputComponent,
    DynamicFormComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class UiModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './container/layout-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    LayoutPageComponent
  ]
})
export class LayoutModule { }

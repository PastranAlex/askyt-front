import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageComponent } from './container/public-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import {PUBLIC_ROUTES} from './public.routes'


@NgModule({
  declarations: [
    PublicPageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PUBLIC_ROUTES
  ],
  exports:[
    PublicPageComponent
  ]
})
export class PublicModule { }

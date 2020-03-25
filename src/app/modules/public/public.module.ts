import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageComponent } from './container/public-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { PublicRoutingModule } from './public.routes';


@NgModule({
  declarations: [
    PublicPageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  exports:[
    PublicPageComponent
  ]
})
export class PublicModule { }

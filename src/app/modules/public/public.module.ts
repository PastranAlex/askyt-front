import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageComponent } from './container/public-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'



@NgModule({
  declarations: [
    PublicPageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PublicPageComponent
  ]
})
export class PublicModule { }

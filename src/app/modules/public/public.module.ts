import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageComponent } from './container/public-page/public-page.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';



@NgModule({
  declarations: [PublicPageComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }

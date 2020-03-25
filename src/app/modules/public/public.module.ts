import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicPageComponent } from './container/public-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { PublicRoutingModule } from './public.routes';
//MDB
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    PublicPageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports:[
    PublicPageComponent
  ]
})
export class PublicModule { }

import {RouterModule, Routes } from "@angular/router";
import { PublicPageComponent } from './container/public-page.component'
import { NgModule } from '@angular/core';
import {DashboardComponent} from './components/dashboard/dashboard.component'

const routes: Routes=[
    { path:'', component: PublicPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class PublicRoutingModule { }
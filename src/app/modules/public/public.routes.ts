import {RouterModule, Routes } from "@angular/router";
import { PublicPageComponent } from './container/public-page.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'

const contentRoutes: Routes=[
    {
        path:'',
        component:PublicPageComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
         

        ]
         
    }

    


];


export const PUBLIC_ROUTES = RouterModule.forChild(contentRoutes);//se le pasa la ruta principal
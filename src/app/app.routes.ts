import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { TestPage } from './pages/test/test.page';

export const routes: Routes = [

    {
        path:'home', component: HomePage 
    },
    {
        path:'test', component: TestPage 
    },
    {
        path:'**', pathMatch:'full', redirectTo:'home'
    },

];

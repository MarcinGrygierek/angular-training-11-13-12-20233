import { Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'home', component: HomePageComponent
    }, 
    {
        path: 'manager', loadComponent: () => import('./views/manager-page/manager-page.component')
    },
    {
        path: 'summary', loadComponent: () => import('./views/summary-page/summary-page.component')
    },
    {
        path: 'error', loadComponent: () => import('./views/error-page/error-page.component')
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'error'
    }
];

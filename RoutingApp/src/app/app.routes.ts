import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'about', component: AboutComponent, loadChildren: () => import('./components/about/about.routes').then(routes => routes.aboutRoutes)
    },
    {
        path: 'colors/:r/:g/:b', loadComponent: () => import('./components/colors/colors.component').then(cmp => cmp.ColorsComponent)
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', component: ErrorPageComponent
    }
];

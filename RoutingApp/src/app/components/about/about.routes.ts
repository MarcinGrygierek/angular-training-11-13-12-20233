import { Routes } from '@angular/router';
import { AboutUsComponent } from './../about-us/about-us.component';
import { AboutYouComponent } from './../about-you/about-you.component';

export const aboutRoutes: Routes = [
    { path: 'us', component: AboutUsComponent },
    { path: 'you', component: AboutYouComponent }
]

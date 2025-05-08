import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    {path : 'details', component : DetailsComponent},
];

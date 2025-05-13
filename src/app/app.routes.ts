import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { VagonsComponent } from './vagons/vagons.component';

export const routes: Routes = [
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    {path : 'details', component : DetailsComponent},
    {path : 'vagons/:id', component : VagonsComponent},

];

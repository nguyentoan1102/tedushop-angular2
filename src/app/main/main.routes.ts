import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const mainRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // //localhost:4200/login
  { path: 'home', component: HomeComponent },
  // //localhost:4200/main

]

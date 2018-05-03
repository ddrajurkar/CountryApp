import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from '../home/home.component';
import { AllCountriesComponent } from '../all-countries/all-countries.component';
import {CountryDetailComponent} from '../country-detail/country-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',component: HomeComponent },
  { path: 'detail/:name', component: CountryDetailComponent },
  { path: 'all-countries', component: AllCountriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]  
})
export class AppRoutingModule { }

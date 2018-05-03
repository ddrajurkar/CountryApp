import { Component, OnInit } from '@angular/core';


import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  countries: Country[];

  constructor(private cs : CountryService) { }

  ngOnInit() {
    this.getcountries();
  }

  getcountries():void
  {
this.countries = this.cs.getCountries();
  }
}

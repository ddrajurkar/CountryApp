import { Component, OnInit } from '@angular/core';

import { Country } from '../Country';
import  { COUNTRIES } from '../CountryData';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  populatedcountries : Country[] = [];
  largestcountries : Country[] = [];
  gdpcountries : Country[] = [];

  constructor(private cs : CountryService) { }

  ngOnInit() {
   this.setpopulatedcountries();
   this.setlargestcountries();
   this.setgdpcountries();
  }

  setpopulatedcountries():void
  {
    this.populatedcountries = this.cs.getPopulatedCountries();
  }

  setlargestcountries():void{
    this.largestcountries = this.cs.getLargestCountries();
  }

  setgdpcountries():void{
    this.gdpcountries = this.cs.getGDPCountries();
  }
}

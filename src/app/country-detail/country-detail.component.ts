import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common'; 


import { Country } from '../Country';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
country : Country;

  constructor(private route:ActivatedRoute,
    private cs:CountryService,
    private loc:Location
  ) { }

  ngOnInit():void {
    this.getcountry();                                                               
  }

  getcountry():void
  {
    // const name:string = this.route.snapshot.paramMap.get('name');
    this.country = this.cs.getCountry('Russia');
  }

  goback():void
  {
       this.loc.back();
  }
}

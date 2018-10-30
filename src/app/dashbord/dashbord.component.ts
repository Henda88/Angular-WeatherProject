import { Component, OnInit, } from '@angular/core';
import { ConfigService } from '../config.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private configService: ConfigService, private sanister: DomSanitizer) { }
  City;
  api: any;
  api1: any;
  cord: any;
  cord2: any;
  cord3: any;
  country;
  datas;
  lon;
  lat;
  link: SafeResourceUrl;
  date: any;
  calcul: any;
  maxcalcul: any;
  mincalcul: any;


  ngOnInit() {
    this.configService.getConfig(this.City)
      .subscribe((res: any) => {
        this.api1 = res.json();
        this.api1 = this.api1.weather;
        this.cord = res.json();
        this.cord = [this.cord.main];
        this.cord2 = res.json();
        this.cord2 = [this.cord2.wind];
        this.cord3 = res.json();
        this.cord3 = [this.cord3.clouds];
        this.api = res.json();
        this.api = [this.api];
        this.lon = res.json();
        this.calcul = res.json().main.temp;
     this.calcul = this.calcul - 273.15;
     this.calcul = Math.round(this.calcul);
     this.maxcalcul = res.json().main.temp_max;
     this.maxcalcul = this.maxcalcul - 273.15;
     this.maxcalcul = Math.round(this.maxcalcul);
     this.mincalcul = res.json().main.temp_min;
     this.mincalcul = this.mincalcul - 273.15;
     this.mincalcul = Math.round(this.mincalcul);
    this.lon = this.lon.coord.lon;
    this.lat = res.json();
    this.lat = this.lat.coord.lat;
    this.date = Date.now();
    this.link = this.sanister.bypassSecurityTrustResourceUrl(`https://www.windy.com/?${this.lat},${this.lon},7`);
      });
  }
}


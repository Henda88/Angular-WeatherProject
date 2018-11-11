import { Component, OnInit, } from '@angular/core';
import { ConfigService } from '../config.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthgardeService } from './../authgarde.service';
import { Router } from '@angular/router';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  itemList: AngularFireList<any>;
  // tslint:disable-next-line:max-line-length
  constructor(private configService: ConfigService, private sanister: DomSanitizer, public db: AngularFireDatabase, public authgarde: AuthgardeService, private router: Router) {
    this.itemList = db.list('weather');
  }
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
  field: string;
  isopened;

  ngOnInit() {

  }

  insertweather() {
    this.configService.getConfig(this.City).subscribe((res: any) => {
      this.itemList.push({
      data: res.json(),
      time: Date.now()
      });
    });
  }
  logOut() {
    this.authgarde.logout();
  }
getWeather() {
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
        this.isopened = true;
        // tslint:disable-next-line:max-line-length
        this.link = this.sanister.bypassSecurityTrustResourceUrl(`https://www.windy.com/en/-Intégrer-widget-à-page/widgets?${this.lat},${this.lon},7`);
      });
}
}

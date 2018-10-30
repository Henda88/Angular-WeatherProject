import { Injectable, NgModule } from '@angular/core';
import {Http} from '@angular/http';
import { from } from 'rxjs';
import { Capability } from 'protractor';



@Injectable()
export class ConfigService {


  constructor(private http: Http) { }
  x;
  getConfig(x) {
  return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${x}&APPID=dbc0566566bdaf453cb158fbda5735ea`);

    }
}




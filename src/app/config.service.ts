import { Injectable, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { Capability } from 'protractor';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable()
export class ConfigService {

  itemListe: AngularFireList<any>;
  listName;

  constructor(private http: Http, public db: AngularFireDatabase) {
    this.itemListe = db.list('weather');
    this.listName = db.list('weather').valueChanges();
  }
  x;
  getConfig(x) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${x}&APPID=dbc0566566bdaf453cb158fbda5735ea`);

  }
  getdatabase() {
    return this.listName;
  }

}




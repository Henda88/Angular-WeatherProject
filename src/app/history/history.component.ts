import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  listweather;
  timer;
  id;
  showDeletedMessage: boolean;
  key;
  constructor(private configService: ConfigService, public db: AngularFireDatabase) {
    this.timer = db.list('weather').valueChanges();
    this.itemsRef = db.list('weather');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
    );
  }

  database;
  city;
  ngOnInit() {
    this.listweather = this.configService.getdatabase();
  }
  roundingValue(tempVal) {
    return Math.round(tempVal);
  }

  deleteItem(key: string) {
    if (confirm('Are you sure to delete this card ?')) {
      this.itemsRef.remove(key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }
}












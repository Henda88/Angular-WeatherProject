import { Component, OnInit } from '@angular/core';
import { AuthgardeService } from './../authgarde.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(public authService: AuthgardeService, private firebase: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  loginGoogle() {
    this.authService.login();
  }
  logins() {
    this.authService.loginsimple(this.email, this.password);
  }
}

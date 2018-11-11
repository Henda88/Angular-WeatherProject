import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  email = '';
  password = '';
  constructor(private formBuilder: FormBuilder, private firebase: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required, Validators.minLength(10)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('YOUR ACCOUNT HAS BEEN CREATED!! :-)');
  }
  signup() {
    this.firebase.auth.createUserWithEmailAndPassword(this.email, this.password).then(user => {
      console.log(this.email, this.password);
      this.router.navigateByUrl('/login');
    });
  }
}

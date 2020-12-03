
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  role: number;
  id: bigint;

  signinform: FormGroup;
  username: string;
  password: string;
  data: any;

  constructor(private router: Router, private signinService: SigninService, private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:9000/sacchon/login/';

  ngOnInit(): void {
    this.signinform = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  
  logIn() {

    this.signinService.authorization(this.signinform).subscribe(data => {
      console.log(data);
      if (data) {
        console.log(data);
        sessionStorage.setItem('username', data.username)
        sessionStorage.setItem('password', data.password)
        sessionStorage.setItem("credentials", data.username + ":" + data.password);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('id', data.id);
        if (data.role == 1) {
          this.router.navigate(['reporter/home-reporter'])
        }
        else if (data.role == 2) {
          this.router.navigate(['patients/home'])
        }
        else {
          this.router.navigate(['doctors/home-doctor'])
        }
      }
      else {
        alert("Wrong username or password!!!");
        this.router.navigate(['signin'])
      }
    });
  }
}

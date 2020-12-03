import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;

  constructor(private router: Router, private signupService: SignupService) { }

  ngOnInit(): void {
      /* all that fields below are required for the 
      registration of a new patient,
      */
    this.signupform = new FormGroup({
      name: new FormControl("", [Validators.required]),
      dob: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      diabetesType: new FormControl("", [Validators.required]),
      dateDiagnosed: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      password2: new FormControl("", [Validators.required, Validators.minLength(8)])

    })
  }
  signUp() {
    // if (this.signupform.get('password') == this.signupform.get('password2')) {
    const name = this.signupform.get('name').value;
    const dob = this.signupform.get('dob').value;
    const gender = this.signupform.get('gender').value;
    const diabetesType = this.signupform.get('diabetesType').value;
    const dateDiagnosed = this.signupform.get('dateDiagnosed').value;
    const username = this.signupform.get('username').value;
    const password = this.signupform.get('password').value;

    this.signupService.addUserPatient(name, dob, gender, diabetesType, dateDiagnosed, username, password).subscribe(data => {
      this.ngOnInit();
      if (data) {
        console.log(data);
        sessionStorage.setItem('username', data.username)
        sessionStorage.setItem('password', data.password)
        sessionStorage.setItem("credentials", data.username + ":" + data.password);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('id', data.id);
        this.router.navigate(['patients/'])
      }
      else {
        alert("Wrong username or password!!!");
        this.router.navigate(['signin'])
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedin: boolean;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    if (!sessionStorage.getItem('credentials')) {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
    else {
      return true;
    }
  }
  
  logout(){
    sessionStorage.clear();
    this.isLoggedin = false;
    this.router.navigate(['signin']);
  }
}

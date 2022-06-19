import { Component, OnInit } from '@angular/core';
import { ROUTESADMIN } from '../sidebar/sidebar.component';
import { ROUTESUSER } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { JWTTokenService } from '../../services/jwttoken.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public returnUrl: string;
  public username: string;

  constructor(
    location: Location,
    private router: Router,
    private userService: UserService,
    private jwtService: JWTTokenService
  ) {
    this.location = location;
  }

  ngOnInit() {
    if (this.isUserLoggedIn()) {
      this.listTitles = ROUTESUSER.filter(listTitle => listTitle);
    } else if (this.isAdminLoggedIn()){
      this.listTitles = ROUTESADMIN.filter(listTitle => listTitle);
    }
    this.username = this.jwtService.getUserEmail().toUpperCase();
  }

  isUserLoggedIn() {
    return this.jwtService.getUserType() === 1;
  }

  isAdminLoggedIn() {
    return this.jwtService.getUserType() === 0;
  }

  getTitle(){
    var title = "";
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return title;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/country']);
  }
}

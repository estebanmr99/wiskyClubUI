import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JWTTokenService } from './jwttoken.service';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(//private loginService: LoginService,
              private authStorageService: LocalStorageService,
              private jwtService: JWTTokenService,
              private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
      if (this.jwtService.getToken() == null){
        this.jwtService.setToken(this.authStorageService.get('token'));
      }
      if (this.jwtService.getUserEmail()) {
          if (this.jwtService.getUserType() === 0) {
            return true;
          } else {
            console.log('AdminGuard: canActivate: false');
            return false;
          }
      }
      else {
        return this.router.navigate(['/country']);
      }
  }
}
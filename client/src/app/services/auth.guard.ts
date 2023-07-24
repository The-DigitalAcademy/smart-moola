import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    public jwtHelper: JwtHelperService
  ) { }

  canActivate(): boolean {
    const token = localStorage.getItem('Token');
    const email = localStorage.getItem('Email');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      if (email) {
        return true;
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      alert('Token is expired, Access denied!');
      return false;
    }
  }

}

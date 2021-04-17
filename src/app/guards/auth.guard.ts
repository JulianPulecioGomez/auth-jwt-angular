import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService, private router: Router){

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.AuthService.isLoggedIn()) {
      return this.router.parseUrl('/login');
    } else {
      return true;
    }
  }
  
}

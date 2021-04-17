import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { User } from '../Interfaces/User';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { Tokens } from '../Interfaces/Tokens';
import { Interface } from 'node:readline';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;
  
  constructor(private httpClient: HttpClient) {}

  login(user: User) : Observable<boolean> {
    return this.httpClient.post(environment.apiUrl + '/login', user)
    .pipe(
      tap(tokens => this.doLoginUser(user.email)),
      mapTo(true),
      catchError((error) : Observable<boolean> => {
        console.log(error);
        return of(false);
      }));
  }

  logout() {

  }

  isLoggedIn() {
    return false;
  }

  refreshToken() {
  }

  getJwtToken() {
  }

  private doLoginUser(username: string) {
    this.loggedUser = username;
  }

  private doLogoutUser() {
  }

  private getRefreshToken() {
  }

  private storeJwtToken() {
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
  }
}

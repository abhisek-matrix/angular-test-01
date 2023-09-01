import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  otpRefreshToken!:string;
  constructor(
    private router: Router
  ) { }

  isLogin() {
    return localStorage.getItem('accessToken');
  }  

  getToken() {
    //this.storage.getLocalStorageItem("authToken", "");
  }

  setToken(token:string) {
    localStorage.setItem('accessToken', token);
  }

  
}

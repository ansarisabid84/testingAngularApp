import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    console.log("called me: ", this.getToken());
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }

  login(email:any, password: any) {
    if (email == "sabid@app.com" && password == "pass") {
      this.setToken("fhvgdhfgbdfjbvjgdfbsdjvbjdhfbgv");
      return true;
    } 
    return false;

  }


}

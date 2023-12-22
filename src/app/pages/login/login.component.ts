import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 
  faLock = faLock

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private authService: AuthService, private router: Router){}

  submitMyForm(){
    if(this.authService.login(this.loginForm.value.email, this.loginForm.value.password)) {
      this.router.navigate(["admin"]);
    } else {
      alert("Invalid login");
    }
  }

  ngOnInit(): void {
      if (this.authService.isLoggedIn()) {
        this.router.navigate(["admin"]);
      }
  }

}

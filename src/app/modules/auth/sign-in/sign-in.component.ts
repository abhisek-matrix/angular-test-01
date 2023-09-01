import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginData } from '../../../data/auth';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  SignInForm!: FormGroup;
  private loginData: any = loginData;

  constructor(
              private router: Router, 
              private authService: AuthService
             ) 
  { }

  ngOnInit() 
  {
        this.generateForm();
  }

  generateForm(){
    this.SignInForm = new FormGroup({
      email:new FormControl(this.loginData.email,[Validators.required]),
      password: new FormControl(this.loginData.password,[Validators.required])      
    })
  }

  doSignIN()
  {
      this.authService.setToken(this.loginData.authToken);
      this.router.navigateByUrl('/admin/dashboard');
  }

}

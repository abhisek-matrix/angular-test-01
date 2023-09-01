import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

/*
**    checks user logged in or not
*/

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {   
   // console.log('token', this.authService.isLogin());
    if(!this.authService.isLogin()) {  
      this.router.navigateByUrl('/sign-in');
      return false;
    }
    return true;
  }
}


/*
**    redirect user to dashboard if logged in
*/


@Injectable({
  providedIn: 'root'
})


export class CheckAuth implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {   
   // console.log('token', this.authService.isLogin());
    if(this.authService.isLogin()) {  
      this.router.navigateByUrl('/admin/dashboard');
      return false;
    }
    return true;
  }
}

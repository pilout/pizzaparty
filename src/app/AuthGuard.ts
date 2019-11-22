import { CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor( private fb: AngularFireAuth)
    {

    }
    
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean  {
        return this.fb.auth.currentUser != null;
    }
    
}
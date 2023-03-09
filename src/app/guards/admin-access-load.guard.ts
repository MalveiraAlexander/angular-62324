import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAccessLoadGuard implements CanMatch {
  constructor(private router: Router) { }
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let roleId: number = 1;
      if (roleId === 1) {
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }
}

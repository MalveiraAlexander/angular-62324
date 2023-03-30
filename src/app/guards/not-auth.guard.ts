import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../modules/shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanLoad {
  constructor(private storage: StorageService,
              private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storage.existToken()) {
      this.router.navigate(['/main']);
      return false;
    } else {
      return true;
    }
  }
}

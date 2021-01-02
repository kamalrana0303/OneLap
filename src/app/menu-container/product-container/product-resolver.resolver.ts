import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ContactService, devices} from 'src/app/contact.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverResolver implements Resolve<devices[]> {
  constructor(private service:ContactService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<devices[]> {
    //const id:number=+route.paramMap.get('id')
    return this.service.authenticate();
  }
}

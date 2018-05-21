import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {datatablecontent} from './customdatatable.component';

@Injectable()
export class DatatableService {
  private url='http://localhost/angular2/demo1/get_users.php';

  constructor(private http:Http) { }

  getUsersList():Observable<datatablecontent[]>{
    return this.http.get(this.url).map(
      (response:Response)=><datatablecontent[]>response.json()
    );
  }

}

import { Injectable } from '@angular/core'
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {IProduct} from './product';

@Injectable()
export class CustomhttpService{
  //private _producturl='assets/products.json';
  private _producturl='http://localhost/angular2/demo1/get_data.php';
  constructor(private _http:Http) { }

  getproducts(): Observable<IProduct[]>{
    return this._http.get(this._producturl)
    .map((response:Response)=> <IProduct[]> response.json())
   // .do(data => console.log(JSON.stringify(data)))
    ;
  }
  ngOnInit() {

  }

}

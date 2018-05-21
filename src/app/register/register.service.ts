import { Injectable } from '@angular/core'
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class RegisterService{
  //private _producturl='assets/products.json';
  private url='http://localhost/angular2/demo1/post_check.php';
  constructor(private http:Http) { }

register(someFormData){
   return this.http.post(this.url, someFormData,).map((response: Response) => response);
}
  ngOnInit() {

  }

}

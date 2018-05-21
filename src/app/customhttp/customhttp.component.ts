import { Component, OnInit } from '@angular/core';
import {  } from '@angular/core';
import {IProduct} from './product';
import { CustomhttpService} from './customhttp.service';
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-customhttp',
  templateUrl: './customhttp.component.html',
  styleUrls: ['./customhttp.component.css'],
  providers: [CustomhttpService]
})


export class CustomhttpComponent implements OnInit {
  iproducts:IProduct[];
  constructor(private _product:CustomhttpService) { }
 
  ngOnInit() : void {
    this._product.getproducts()
    .subscribe(iproducts => this.iproducts = iproducts);
 }

}

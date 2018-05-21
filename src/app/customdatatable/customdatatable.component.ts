import { Component, OnInit } from '@angular/core';
import {DatatableService } from './datatable.service';

@Component({
  selector: 'app-customdatatable',
  templateUrl: './customdatatable.component.html',
  styleUrls: ['./customdatatable.component.css']
})
export class CustomdatatableComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}

export interface datatablecontent{
  id:number,
  firstname:string,
  lastname:string
}

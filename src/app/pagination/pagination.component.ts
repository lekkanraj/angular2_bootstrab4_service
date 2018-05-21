import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Users} from './users';
import {UserService} from './users.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SlicePipe} from "@angular/common";


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers:[UserService]
})
export class PaginationComponent implements OnInit {
  userList:Users[];
  constructor(private userservice:UserService) { }

  totalItems =0;
  itemsPerPage=10;
  currentPage = 1;
  smallnumPages = 0;
  start=0;
  end=0;

  ngOnInit():void {
    this.userservice.getUsers().subscribe(userList=>{
       this.userList = userList;
       this.totalItems = this.userList.length;
       if(this.totalItems){
        this.start = (this.currentPage - 1) * this.itemsPerPage;
        this.end = this.start + this.itemsPerPage;
       }
      }
    );
  }

  setPage(pageNo: number): void {    
    this.currentPage = pageNo;
  }
 
  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.start = (event.page - 1) * event.itemsPerPage;
    this.end = this.start + event.itemsPerPage;
    this.currentPage = event.page;
  }

}

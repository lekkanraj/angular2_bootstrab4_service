import { Component, OnInit } from '@angular/core';
import { } from '../customform/customform.component';
import { } from '../datatable/datatable.component';
@Component({
  selector: 'app-tablepage',
  templateUrl: './tablepage.component.html',
  styleUrls: ['./tablepage.component.css']
})
export class TablepageComponent implements OnInit {

  Users: any[ ] = [
    {'sno': '1' , 'name' : 'Tester2' , 'phone' : '78976643' , 'email' : 'test@gmail.com' , 'city' : 'Chennai' },
    {'sno': '2' , 'name' : 'Tester1' , 'phone' : '7893432' , 'email' : 'test1@gmail.com' , 'city' : 'Trichy' },
    {'sno': '3' , 'name' : 'Tester3' , 'phone' : '789' , 'email' : 'test3@gmail.com' , 'city' : 'Kovai'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

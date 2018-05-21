import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { Approute } from '../app.routes';


import { User } from './user';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  dismissible = true;
 
  constructor() { }

  ngOnInit() {
  }

}

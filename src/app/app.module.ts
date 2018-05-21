import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap';
import {PaginationModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TablepageComponent } from './tablepage/tablepage.component';

import {Approute} from './app.routes';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CustomformComponent } from './customform/customform.component';
import { CustomhttpComponent } from './customhttp/customhttp.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CustomdatatableComponent } from './customdatatable/customdatatable.component';
import { DatatablePipe } from './customdatatable/datatable.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    TopbarComponent,
    SidebarComponent,
    HomepageComponent,
    TablepageComponent,
    RegisterComponent,
    CustomformComponent,
    CustomhttpComponent,
    PaginationComponent,
    CustomdatatableComponent,
    DatatablePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(Approute),
    AlertModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

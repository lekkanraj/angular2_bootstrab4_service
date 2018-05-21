import {Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {TablepageComponent} from './tablepage/tablepage.component';
import {RegisterComponent} from './register/register.component';
import { CustomhttpComponent } from './customhttp/customhttp.component'
import { PaginationComponent } from './pagination/pagination.component';

export const Approute: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'table',
        component: TablepageComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'customhttp',
        component: CustomhttpComponent
    },
    {
        path: 'pagination',
        component: PaginationComponent
    }
];

import { Injectable} from '@angular/core';
import {Users} from './users';
import { User } from '../homepage/user';
import { Http, Response} from '@angular/http';
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService{
    private userUrl="http://localhost/angular2/demo1/get_users.php";
    constructor(private http:Http){}
    getUsers():Observable< Users[]>{
        return this.http.get(this.userUrl).map(
            (response:Response)=><Users[]> response.json());
    }

}

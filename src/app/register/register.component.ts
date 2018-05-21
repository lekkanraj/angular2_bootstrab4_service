import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http,Response} from '@angular/http';

import { RegisterService} from './register.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private router:Router, private http:Http, private registerservice:RegisterService) { 
    
  }
  private url="http://localhost/angular2/demo1/post_check.php";
  ngOnInit() {
  }

  register(formdata){
    let someFormData = new FormData();
    Object.keys(formdata.value).forEach(k => {
      someFormData.append(k, formdata.value[k]);
    });
    
    this.registerservice.register(someFormData).subscribe(
      res=>{
        if(res){
            alert("Added User successfully");          
        }else{
            alert("Failed to add");
        }
      }
    );
    //this.http.post(this.url, someFormData,).subscribe(res => {
     // console.log(res);
    //});

   // this.router.navigate(['/']);
    //console.log("Success");
  }

}

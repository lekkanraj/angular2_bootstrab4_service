import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Customformclass } from './customformclass';
//Ref:https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/
import { Http,Response} from '@angular/http';


@Component({
  selector: 'app-customform',
  templateUrl: './customform.component.html',
  styleUrls: ['./customform.component.css'],

})
export class CustomformComponent implements OnInit {
  heroform : FormGroup;
  constructor(private http:Http) { }
  private url='http://localhost/angular2/demo1/post_check.php';
  hero = new Customformclass('',null);


  ngOnInit() {
    this.heroform = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'age': new FormControl(this.hero.age,[
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }
  get name() { return this.heroform.get('name'); }
  get age() { return this.heroform.get('age'); }
  onSubmit() {
    if (this.heroform.valid) {
     // this.heroform.reset();
      alert('form submitted');
      let someFormData = new FormData();
      Object.keys(this.heroform.value).forEach(k => {
        someFormData.append(k, this.heroform.value[k]);
      });
      
      this.http.post(this.url, someFormData,).subscribe(res => {
        console.log(res);
      });
      
     } else {
      Object.keys(this.heroform.controls).forEach(field => { 
        const control = this.heroform.get(field);            
        control.markAsTouched({ onlySelf: true });       
      });
    }
  }
}

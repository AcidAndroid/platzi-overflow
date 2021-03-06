import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-signin-screen',
  templateUrl: './signin-screen.component.html',
  styleUrls: ['./signin-screen.component.css']
})
export class SigninScreenComponent implements OnInit {

  signinForm:FormGroup

  constructor() { }

  onSubmit(){
    
    if(this.signinForm.valid){
      const {email,password}=this.signinForm.value
      const user = new User(email,password)
      // console.log(user)
    }
  }

  ngOnInit() {
    this.signinForm= new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
      ,password:new FormControl(null,Validators.required)
    })
  }

}

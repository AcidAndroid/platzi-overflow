import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '../../../../node_modules/@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {
  singupForm:FormGroup


  constructor() { }

  onSubmit(){
    
    if (this.singupForm.valid) {
      console.log('Subscripcion Valida')
      const {email,password,lastName,firstName}=this.singupForm.value
      const user = new User(email,password,firstName,lastName)
      console.log(user)
    }
  }
  ngOnInit() {
    this.singupForm= new FormGroup({
      firstName:new FormControl(null,Validators.required)
      ,lastName:new FormControl(null,Validators.required)
      ,email:new FormControl(null,[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
      ,password:new FormControl(null,Validators.required)
    })
  }

}

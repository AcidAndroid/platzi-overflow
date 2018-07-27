import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";
import { QuestionListComponent } from './question/question-list/question-list.component';
import { SigninScreenComponent } from './auth/signin-screen/signin-screen.component';
import { SignupScreenComponent } from './auth/signup-screen/signup-screen.component';
import { QUESTION_ROUTES } from "./question/question-routing";

const APP_ROUTES:Routes =[
  {path:'',pathMatch:'full',component:QuestionListComponent}
  ,{path:'signin',component:SigninScreenComponent}
  ,{path:'signup',component:SignupScreenComponent}
  ,{path:"questions", children:QUESTION_ROUTES }
]

export const Routing = RouterModule.forRoot(APP_ROUTES)

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []
  exports:[RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionFormComponent } from './question-form/question-form.component';


export const QUESTION_ROUTES:Routes =[
  {path:'',pathMatch:'full',component:QuestionListComponent}
  ,{path:'new',component:QuestionFormComponent}
  ,{path:':id',component:QuestionDetailComponent}
  
  
]

// export const Routing = RouterModule.forRoot(QUESTION_ROUTES)

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []
  exports:[RouterModule]
})
export class QuestionRoutingModule { }

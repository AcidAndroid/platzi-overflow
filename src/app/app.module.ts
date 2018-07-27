import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

/*Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { MomentModule } from 'angular2-moment';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { SigninScreenComponent } from './auth/signin-screen/signin-screen.component';
import { SignupScreenComponent } from './auth/signup-screen/signup-screen.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionFormComponent } from './question/question-form/question-form.component';




@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,    
    AnswerFormComponent, SigninScreenComponent, SignupScreenComponent, QuestionListComponent, QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

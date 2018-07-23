import { Component, OnInit } from '@angular/core';
import { Question  } from "../question.model"
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  public question: Question=new Question('Esta es una nueva pregunta'
,'Tengo una duda y es la siguiente... Y Asi'
,new Date
,'devicon-android-plain')
  constructor() { }

  ngOnInit() {
  }

}

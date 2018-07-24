import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Answer, User } from './answer.model';
import { Question } from '../question/question.model';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {

  @Input() public question:Question
  
  onSubmit(form:NgForm){
    const answer = new Answer(
      form.value.description
      ,this.question
      ,new Date
      ,new User('Pop','Loco')
    )

    this.question.answers.unshift(answer)
    console.log(form.value)
    form.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}

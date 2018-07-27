import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';


const preguntaFake = new Question("Prueba"
,"Una pregunta de prueba"
,new Date()
,'none')

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  public questions:Question[] = new Array(10).fill(preguntaFake)
  constructor() { }

  ngOnInit() {
  }

}

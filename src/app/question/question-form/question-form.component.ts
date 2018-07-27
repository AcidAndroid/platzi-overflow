import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Question } from '../question.model';
import icons from "../../question/icons";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  
  public icons:Object[]=icons
  
  constructor() { }

  getIconVersion(icon:any){
    // console.log(icon)
    let version
    version=icon.versions.font[0];
    if (icon.versions.font.includes('plain-wordmark')) {
      version='plain-wordmark'      
    }
    return version
  }
  onSubmit(form:NgForm){
    console.log(form.value)
    const question= new Question(
      form.value.title
      ,form.value.description
      ,new Date()
      ,form.value.icon
    )
    console.log(question)
  }

  ngOnInit() {

    // console.log(icons)
  }

}

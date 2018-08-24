import { Component, OnInit } from '@angular/core';
import { Node } from './node';

import { QuestionService } from '../dynamic-form-question/question.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [ QuestionService ]
})
export class FormsComponent implements OnInit {

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  nodeTypes = [{ value: 1, name: '参数' }, { value: 2, name: '参数组' }];
  node = new Node(2, '报价');
  questions: any[];

  ngOnInit() {
    // this.nodeForm = 
  }

  onSubmit() {
    console.log(this);
  }

}

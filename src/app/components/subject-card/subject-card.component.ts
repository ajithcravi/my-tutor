import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

  @Input() subjectName: string
  @Input() fee: number
  @Input() chargedPer: string
  @Input() level: string
  @Input() editableView: boolean = false
  @Input() courseId: number
  @Output() clickOutput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick = () => {
    this.clickOutput.emit({courseId: this.courseId})
  }

}

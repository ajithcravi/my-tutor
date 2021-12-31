import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  
  @Input() subjectName: string
  @Input() fee: number
  @Input() chargedPer: string
  @Input() level: string
  @Input() tutor: string
  @Input() userId: number

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}

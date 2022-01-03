import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() userId: number
  @Input() userName:string
  @Input() userRole:string

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  viewUser(){
    this.router.navigate(['/app/profile'], {queryParams: {userId: this.userId}})
  }

}

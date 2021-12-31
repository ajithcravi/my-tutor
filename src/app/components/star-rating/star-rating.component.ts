import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  rating: number = 0;
  starArray: number[] = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit(): void {
  }

  starClick = (num: number) => {
    if(this.rating === num) this.rating = 0
    else this.rating = num;
  }

}

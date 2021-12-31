import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-public-page-base',
  templateUrl: './public-page-base.component.html',
  styleUrls: ['./public-page-base.component.css']
})
export class PublicPageBaseComponent implements OnInit {

  isSmallScreen: boolean = false

  constructor( public breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakPointObserver.observe(['(max-width: 600px)']).subscribe((state: BreakpointState) => {
      if(state.matches) this.isSmallScreen = true
      else this.isSmallScreen = false
    })
  }

}

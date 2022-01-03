import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingServiceService } from 'src/app/services/loading-service.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {

  loadingSubscription: Subscription;
  isLoading = false;
  isAdmin:boolean
  
  constructor(public router: Router, private _loadingService: LoadingServiceService) { 
    this.isAdmin = false
  }

  ngOnInit(): void {
    this.loadingSubscription = this._loadingService.isLoading$.pipe().subscribe(
      (loadingStatus: boolean) => this.isLoading = loadingStatus )
      this.isAdmin  = true  
  }

  searchCourses = () => {
    this.router.navigate(['/app/courses'])
  }
  searchUsers = () => {
    this.router.navigate(['/app/users'])
  }

  myProfile = () => {
    this.router.navigate(['/app/profile'], {queryParams: {userId: localStorage.getItem('myUserId')}})
  }

  logout = () => {
    localStorage.setItem('myUserId', '')
    this.router.navigate(['/signin'])
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}

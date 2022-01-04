import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoadingServiceService } from 'src/app/services/loading-service.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {

  loadingSubscription: Subscription;
  isLoading = false;
  isAdmin: boolean = localStorage.getItem('myRole')==='1' ? true : false
  
  constructor(
    public router: Router,
    private _loadingService: LoadingServiceService,
    private _cookieService: CookieService,
    public apiService: ApiServiceService
    ) { 
  }

  ngOnInit(): void {
    this.loadingSubscription = this._loadingService.isLoading$.pipe().subscribe(
      (loadingStatus: boolean) => this.isLoading = loadingStatus ) 
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
    localStorage.setItem('myRole', '')
    this._cookieService.deleteAll();
    this.apiService.logout().subscribe(() => this.router.navigate(['/signin']))
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}

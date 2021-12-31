import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingServiceService } from './services/loading-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadingSubscription: Subscription;
  isLoading = false;

  constructor(private _loadingService: LoadingServiceService) {}

  ngOnInit(): void {
      this.loadingSubscription = this._loadingService.isLoading$.pipe().subscribe(
        (loadingStatus: boolean) => this.isLoading = loadingStatus 
      )
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}

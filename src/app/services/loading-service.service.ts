import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {

  isLoading$: Subject<boolean> = new Subject();

  constructor() { }

  startLoading = () => this.isLoading$.next(true);

  stopLoading = () => this.isLoading$.next(false);

}

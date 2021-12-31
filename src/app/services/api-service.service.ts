import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SnackbarServiceService } from './snackbar-service.service';
import { LoadingServiceService } from './loading-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // Should go into env file
  baseUrl = 'https://k8x78ab72m.execute-api.us-east-2.amazonaws.com'

  constructor(private _http: HttpClient, private _snackBar: SnackbarServiceService, private _loadingService: LoadingServiceService) { }

  register(data: any): Observable<any> {
    return this._http.post(this.baseUrl + '/register', JSON.stringify(data)).pipe(catchError(this.handleError))
  }

  login(data: any): Observable<any> {
    return this._http.post(this.baseUrl + '/login', JSON.stringify(data)).pipe(catchError(this.handleError))
  }

  addCourse(data: any): Observable<any> {
    return this._http.post(this.baseUrl + '/add-course', JSON.stringify(data)).pipe(catchError(this.handleError))
  }

  getProfile(data: any): Observable<any> {
    return this._http.get(this.baseUrl + '/get-profile', {params: data}).pipe(catchError(this.handleError))
  }

  searchCourse(data: any): Observable<any> {
    return this._http.get(this.baseUrl + '/search-course', {params: data}).pipe(catchError(this.handleError))
  }

  deleteCourse(data: any): Observable<any> {
    return this._http.delete(this.baseUrl + '/delete-course', {body: JSON.stringify(data)}).pipe(catchError(this.handleError))
  }

  // Error handling 
  handleError = (error:any) => {
    console.log(error)
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      (typeof error.error === 'string')? errorMessage = error.error : errorMessage =  error.message;
      
    }
    this._snackBar.error(errorMessage)
    this._loadingService.stopLoading();
    return throwError(errorMessage);
 }
}

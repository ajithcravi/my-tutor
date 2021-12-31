import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoadingServiceService } from 'src/app/services/loading-service.service';

// Form validator - Error handler
export class SigninErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isSmallScreen: boolean = false;

  constructor(private _breapointObserver: BreakpointObserver, public apiService: ApiServiceService, public router: Router, private _loadingService: LoadingServiceService) { }

  ngOnInit(): void {
    this._breapointObserver.observe('(max-width: 600px)').subscribe((state: BreakpointState) => {
      if(state.matches) this.isSmallScreen = true
      else this.isSmallScreen = false
    })
  }

  hide = true;

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  emailMatcher = new SigninErrorStateMatcher()
  passwordMatcher = new SigninErrorStateMatcher()

  signin = () => {
    console.log(this.signinForm.value)
    this._loadingService.startLoading()
      this.apiService.login(this.signinForm.value).subscribe((data:{user_id:number}) => {
        console.log(data)
        localStorage.setItem('myUserId', `${data.user_id}`)
        this._loadingService.stopLoading()
        this.router.navigate(['/app/profile'], {queryParams: {userId: data.user_id}})
      })
  }

}

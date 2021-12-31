import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoadingServiceService } from 'src/app/services/loading-service.service';
import { SnackbarServiceService } from 'src/app/services/snackbar-service.service';

// Form validator - Error handler
export class SignupErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // Hide or Show password
  hide: boolean = true;
  hideConfirm:  boolean = true;

  isSmallScreen: boolean = false

  constructor(private _snackBar: SnackbarServiceService, private _breapointObserver: BreakpointObserver, public apiService: ApiServiceService, public router: Router, private _loadingService: LoadingServiceService){}

  ngOnInit(): void {
    this._breapointObserver.observe('(max-width: 600px)').subscribe((state: BreakpointState) => {
      if(state.matches) this.isSmallScreen = true
      else this.isSmallScreen = false
    })
  }

  // Custom validator - check password and confirm password
  passwordMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password?.value === confirmPassword?.value ? null : { passwordMatch: true };
  };

  // Custom validator - one of the roles is selected
  languageSelection: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const languages = control.get('languages');
    return languages && languages.value.length >0 ? null : { languageSelection: true };
  };

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    dob: new FormControl('', [Validators.required]),
    // languages: new FormControl([], [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    role: new FormControl('student', [Validators.required])
  }, {validators: [this.passwordMatch]})

  usernameMatcher = new SignupErrorStateMatcher()
  emailMatcher = new SignupErrorStateMatcher()
  mobileMatcher = new SignupErrorStateMatcher()
  dobMatcher = new SignupErrorStateMatcher()
  // languageMatcher = new SignupErrorStateMatcher()
  passwordMatcher = new SignupErrorStateMatcher()
  confirmPasswordMatcher = new SignupErrorStateMatcher()

  signup = () => {
    if(this.signupForm.errors?.passwordMatch) this._snackBar.error('Passwords must match')
    console.log(this.signupForm.value)

    if(!this.signupForm.invalid) {
      this._loadingService.startLoading();
      let request = this.signupForm.value;
      request["dob"] = request.dob.toDateString();
      console.log(JSON.stringify(request))
      this.apiService.register(request).subscribe(
        (data:{}) => {
          this._loadingService.stopLoading();
          this.router.navigate(['/signin'])
        }
      )
    }
  }

}

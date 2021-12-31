import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

// Form validator - Error handler
export class DetailsErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  // Custom validator - one of the roles is selected
  roleSelection: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const student = control.get('student');
    const tutor = control.get('tutor');
    return student && tutor && (student?.value || tutor?.value) ? null : { roleSelection: true };
  };

  // Custom validator - one of the roles is selected
  languageSelection: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const languages = control.get('languages');
    return languages && languages.value.length >0 ? null : { languageSelection: true };
  };

  detailsForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.minLength(2)]),
    mobile: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    dob: new FormControl('', [Validators.required]),
    languages: new FormControl([], [Validators.required]),
    student: new FormControl(false),
    tutor: new FormControl(false)
  }, {validators: [this.roleSelection, this.languageSelection]})

  usernameMatcher = new DetailsErrorStateMatcher()
  mobileMatcher = new DetailsErrorStateMatcher()
  dobMatcher = new DetailsErrorStateMatcher()
  languageMatcher = new DetailsErrorStateMatcher()

}

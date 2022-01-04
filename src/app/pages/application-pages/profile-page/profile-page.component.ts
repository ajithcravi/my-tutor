import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoadingServiceService } from 'src/app/services/loading-service.service';

import { Course } from "../courses/courses.component";
import { User } from "../courses/courses.component";
import { SnackbarServiceService } from 'src/app/services/snackbar-service.service';
import { CookieService } from 'ngx-cookie-service';


export interface UserDetails {
  userDetails: User | null,
  teacherDetails: {} | null,
  courseDetails: Course[] | null
}

// Form validator - Error handler
export class SubjectErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {

  userId: number;
  details: UserDetails;
  selfProfile: boolean = false;
  isAdmin: boolean = localStorage.getItem('myRole')==='1' ? true : false;

  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    public apiService: ApiServiceService,
    private _loadingService: LoadingServiceService,
    private _snackBar: SnackbarServiceService,
    private router:Router,
    private _cookieService: CookieService
    ) { }

  loadData = (id: number) => {
    this.apiService.getProfile({ userId: id }).subscribe((data: UserDetails) => {
      this.details = data
    })
  }

  ngOnInit(): void {
    this._loadingService.startLoading()
    this._route.queryParams.subscribe(params => {
      this.userId = params['userId'];
      if (`${this.userId}` === localStorage.getItem('myUserId')) this.selfProfile = true
      this.loadData(this.userId)
      this._loadingService.stopLoading()
    });
  }

  deleteCourse(courseId: Event) {
    this._loadingService.startLoading()
    this.apiService.deleteCourse(courseId).subscribe((data: any) => {
      this._snackBar.success('Course deleted successfully')
      this.loadData(this.userId)
      this._loadingService.stopLoading()
    }
    )
  }
  deleteUser(){
    this._loadingService.startLoading()
    this.apiService.deleteUser({userId:this.userId}).subscribe((data: any) => {
      this._snackBar.success('user deleted successfully')
      this.router.navigate(['/app/users'])
      this._loadingService.stopLoading()
    })

  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateSubjectDialog);

    dialogRef.afterClosed().subscribe(result => {
      this.loadData(this.userId)
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'create-subject-dialog',
  templateUrl: 'create-subject-dialog.html',
  styleUrls: ['./profile-page.component.css']
})
export class CreateSubjectDialog implements OnInit {

  @Input() userId: number

  pers = [
    { value: 'class', viewValue: 'Class' },
    { value: 'hour', viewValue: 'Hour' }
  ]
  levels = [
    { value: 'beginner', viewValue: 'Beginner' },
    { value: 'intermediate', viewValue: 'Intermediate' },
    { value: 'expert', viewValue: 'Expert' },
  ]

  courseForm = new FormGroup({
    courseName: new FormControl('', [Validators.required, Validators.maxLength(200), Validators.minLength(2)]),
    fee: new FormControl(100, Validators.min(100)),
    chargedPer: new FormControl('class'),
    level: new FormControl('beginner'),
  })

  courseNameMatcher = new SubjectErrorStateMatcher()
  feeMatcher = new SubjectErrorStateMatcher()
  chargedPerMatcher = new SubjectErrorStateMatcher()
  levelMatcher = new SubjectErrorStateMatcher()

  constructor(
    public dialogRef: MatDialogRef<CreateSubjectDialog>,
    public apiService: ApiServiceService,
    private _route: ActivatedRoute,
    private _loadingService: LoadingServiceService
  ) {
    dialogRef.disableClose = true
  }

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.userId = params['userId']
    });
  }

  addCourse(): void {
    if (!this.courseForm.invalid) {
      this.courseForm.value['userId'] = this.userId
      console.log(this.courseForm.value)
      this._loadingService.startLoading()
      this.apiService.addCourse(this.courseForm.value).subscribe((data: {}) => {
        console.log(data)
        this._loadingService.stopLoading()
        this.dialogRef.close();
      })
    }
  }

  onClickCancel(): void {
    this.dialogRef.close();
  }
}
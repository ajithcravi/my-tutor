import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoadingServiceService } from 'src/app/services/loading-service.service';

export interface User {
  username: string,
  email: string,
  dob: string,
  mobile: string,
  user_id: number
}

export interface Course {
  course_id: number,
  course_name: string,
  fee: number,
  charged_per: string,
  level: string,
  fk_teacher: number
}

export interface Teacher {
  teacher_id: number,
  fk_user: number,
  courses: Course[]
  user: User
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  courseTeachers: Teacher[] | null = null;

  constructor(public apiService: ApiServiceService, private _loadingService: LoadingServiceService) { }

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    searchTerm : new FormControl('')
  })
  

  search = () => {
    this._loadingService.startLoading();
    console.log(this.searchForm.value.searchTerm)
    if(this.searchForm.value.searchTerm !== '') {
      this.apiService.searchCourse(this.searchForm.value).subscribe((data:[]) => {
        this.courseTeachers = data
        console.log(data)
      })
    }
    this._loadingService.stopLoading();
  }

}

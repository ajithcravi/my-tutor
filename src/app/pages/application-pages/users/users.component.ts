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
  role:{
    role_name:string
  }
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
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] | null = null;

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
      this.apiService.searchUsers(this.searchForm.value).subscribe((data:[]) => {
        this.users = data
        this._loadingService.stopLoading();     
      })
    }
  }

}

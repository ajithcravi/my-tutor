import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoadingServiceService } from 'src/app/services/loading-service.service';
import { Teacher } from '../courses/courses.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

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

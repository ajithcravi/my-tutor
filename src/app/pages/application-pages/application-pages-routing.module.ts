import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BasePageComponent } from './base-page/base-page.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: BasePageComponent, children: [
    {path: 'profile', component: ProfilePageComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'admin', component: AdminDashboardComponent},
    {path: 'users', component: UsersComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationPagesRoutingModule { }

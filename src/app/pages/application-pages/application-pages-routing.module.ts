import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BasePageComponent } from './base-page/base-page.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: BasePageComponent, children: [
    {path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
    {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
    {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]},
    {path: 'users', component: UsersComponent, canActivate: [AuthGuard]}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationPagesRoutingModule { }

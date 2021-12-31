import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './base-page/base-page.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path: '', component: BasePageComponent, children: [
    {path: 'profile', component: ProfilePageComponent},
    {path: 'courses', component: CoursesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationPagesRoutingModule { }

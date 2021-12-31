import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSidenavModule} from '@angular/material/sidenav';

import { ApplicationPagesRoutingModule } from './application-pages-routing.module';
import { BasePageComponent } from './base-page/base-page.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { CreateSubjectDialog, ProfilePageComponent } from './profile-page/profile-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CoursesComponent } from './courses/courses.component';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    BasePageComponent,
    ProfilePageComponent,
    CreateSubjectDialog,
    CoursesComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    ApplicationPagesRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,
    ComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    ScrollingModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ]
})
export class ApplicationPagesModule { }

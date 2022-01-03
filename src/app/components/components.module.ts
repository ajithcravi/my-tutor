import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalfPageLogoComponent } from './half-page-logo/half-page-logo.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SubjectCardComponent } from './subject-card/subject-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ReviewDialogComponent } from './review-dialog/review-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';
import { UserCardComponent } from './user-card/user-card.component';
import { LanguageInputComponent } from './language-input/language-input.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CourseCardComponent } from './course-card/course-card.component';



@NgModule({
  declarations: [
    HalfPageLogoComponent,
    ProfilePhotoComponent,
    SubjectCardComponent,
    ProfileDetailsComponent,
    StarRatingComponent,
    ReviewDialogComponent,
    ReportDialogComponent,
    UserCardComponent,
    LanguageInputComponent,
    CourseCardComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    HalfPageLogoComponent,
    ProfilePhotoComponent,
    SubjectCardComponent,
    ProfileDetailsComponent,
    StarRatingComponent,
    ReviewDialogComponent,
    ReportDialogComponent,
    UserCardComponent,
    LanguageInputComponent,
    CourseCardComponent
  ]
})
export class ComponentsModule { }

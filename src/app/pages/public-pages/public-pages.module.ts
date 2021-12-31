import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { PublicPagesRoutingModule } from './public-pages-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PublicPageBaseComponent } from './public-page-base/public-page-base.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevelopmentComponent } from './development/development.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    SignUpComponent,
    PublicPageBaseComponent,
    SignInComponent,
    DevelopmentComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PublicPagesRoutingModule,
    ComponentsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatRadioModule,
    MatSlideToggleModule
  ]
})
export class PublicPagesModule { }

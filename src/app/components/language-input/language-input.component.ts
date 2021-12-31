import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.css']
})
export class LanguageInputComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredLanguages: Observable<string[]> | undefined;
  selectedLanguages: string[] = [];
  allLanguages: string[] = ["Tamil", "English", "Hindi", "Telugu", "Kannada", "Malayalam", "Marathi"];

  @ViewChild('languageInput') languageInput: ElementRef<HTMLInputElement>;

  @Input() matcher: ErrorStateMatcher;
  @Input() formGroup: FormGroup;

  constructor() {
  }

  private _filter(value: string): string[] {
    const filterValue = value[0]?.toLowerCase();

    return this.allLanguages.filter(language => language.toLowerCase().includes(filterValue));
  }


  ngOnInit(): void {
    console.log(this.formGroup.get('languages'))
    this.filteredLanguages = this.formGroup.get('languages')?.valueChanges.pipe(
      startWith(null),
      map((language: string | null) => (language ? this._filter(language) : this.allLanguages.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our language
    if (value) {
      this.selectedLanguages.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

  }

  remove(language: string): void {
    const index = this.selectedLanguages.indexOf(language);

    if (index >= 0) {
      this.selectedLanguages.splice(index, 1);
    }

    this.formGroup.patchValue({
      languages: this.selectedLanguages
    })
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedLanguages.push(event.option.viewValue);
    this.languageInput.nativeElement.value = '';

    this.formGroup.patchValue({
      languages: this.selectedLanguages
    })
  }

}

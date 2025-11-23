import { Component, inject, Output, EventEmitter, effect } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Language } from '../../interfaces/language';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-languages',
  imports: [AsyncPipe],
  templateUrl: './languages.html',
  styleUrl: './languages.css',
})
export class Languages {

  languagesList!: Observable<Language[]>;
  @Output() languageSelected = new EventEmitter<Language>();
  
  apiService: ApiService = inject(ApiService)

  constructor() {
    effect(() => {
      this.languagesList = this.apiService.getAllLanguages();
    }

    )
  }

  openListLanguages(){
    const dropdownListElement = document.querySelector(".dropdown-list")
     if (dropdownListElement?.hasAttribute('hidden')) {
      dropdownListElement.removeAttribute('hidden');
    } else {
      dropdownListElement?.setAttribute('hidden', '');
    }
  }

  chooseLanguage(language: Language) {
    console.log('Selected language:', language);
    const dropdownSelectorElement = document.querySelector(".dropdown-selector");
    dropdownSelectorElement!.textContent = language.title + ' ▼';
    this.languageSelected.emit(language);
  }

}

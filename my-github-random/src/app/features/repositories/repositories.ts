import { Component, inject, signal } from '@angular/core';
import { Languages } from '../languages/languages';
import { Language } from '../../interfaces/language';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { RepositoriesResponse, Repository } from '../../interfaces/repository';

@Component({
  selector: 'app-repositories',
  imports: [Languages],
  templateUrl: './repositories.html',
  styleUrl: './repositories.css',
})
export class Repositories {
  selectedLanguage: Language | null = null;
  apiService: ApiService = inject(ApiService);

  repositories$: Observable<RepositoriesResponse> | null = null;

  repository: Repository | null = null;

  isLoading = signal(false);
  error = signal<string | null>(null);

  onLanguageSelected(language: Language) {
    this.isLoading.set(true);
    this.error.set(null);
    this.selectedLanguage = language;
    console.log('Language selected in repositories:', language);
    this.repositories$ = this.apiService.getRepositoriesByLanguage(language.value);
    this.repositories$.subscribe((response) => {
      this.repository = this.getFirstRepository(response);
      this.isLoading.set(false);
    });
  }

  getRepositories() {
    if (this.selectedLanguage) {
      console.log('Fetching repositories for:', this.selectedLanguage);
    } else {
      console.log('No language selected.');
    }
  }

  getFirstRepository(repositoryResponse: RepositoriesResponse) {
    if (repositoryResponse.items != null && repositoryResponse.items.length > 0) {
      return repositoryResponse.items[Math.floor(Math.random() * repositoryResponse.items.length)];
    }
    return null;
  }

  refreshRepository() {
    console.log("Refreshing repository...");
    this.isLoading.set(true);
    this.error.set(null);
    if (this.selectedLanguage) {
      this.onLanguageSelected(this.selectedLanguage);
    }
  }
}

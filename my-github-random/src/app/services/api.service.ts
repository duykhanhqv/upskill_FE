import { inject, Injectable } from '@angular/core';
import { Language } from '../interfaces/language';
import { Observable } from 'rxjs';
import { RepositoriesResponse } from '../interfaces/repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

   getAllLanguages (): Observable<Language[]>{
    return this.http.get<Language[]>(`https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json`)
  }

  getRepositoriesByLanguage(language: string): Observable<RepositoriesResponse>{
    return this.http.get<RepositoriesResponse>(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`)
  }
  
}

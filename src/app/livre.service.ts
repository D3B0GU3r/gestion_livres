
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  chercherLivres(recherche: string) {
    return this.http.get(`${this.apiUrl}?q=${recherche}`);
  }

  obtenirLivre(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}

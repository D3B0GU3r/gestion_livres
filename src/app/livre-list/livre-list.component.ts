
import {Component} from '@angular/core';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livre-list',
  styleUrls: ['./livre-list.component.scss'],
  templateUrl: './livre-list.component.html'
})
export class LivreListComponent {
  livres: any[] = [];
  recherche = '';

  constructor(private livreService: LivreService) {}

  chercher() {
    this.livreService.chercherLivres(this.recherche)
      .subscribe((data: any) => {
        this.livres = data.items;
      });
  }
}

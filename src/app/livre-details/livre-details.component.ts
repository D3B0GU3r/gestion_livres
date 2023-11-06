import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livre-details',
  templateUrl: './livre-details.component.html',
  styleUrls: ['./livre-details.component.scss']
})
export class LivreDetailsComponent implements OnInit {
  livre: any;

  constructor(private route: ActivatedRoute, private livreService: LivreService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let tr;
    if (id!==null){
      tr=id;
    }else {
      tr="0";
    }

   this.livreService.obtenirLivre(tr)
      .subscribe((data: any) => {
        this.livre = data;
      });
  }
}

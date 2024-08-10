import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CardCollectionService } from '../card-collection.service';
import { Carte } from '../models/carte';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  selector: 'app-list-card', 
  templateUrl: 'list-card.component.html',
  styleUrl: 'list-card.component.scss'
})
export class ListCardComponent implements OnInit {
  valeur: string;
  cartes: Carte[]| string;
  hasCards: boolean = false;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private cardCollectionService: CardCollectionService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.valeur = params['valeur'] || '';
      this.cartes = this.cardCollectionService.getCartesByDepartementId(this.valeur);
      this.hasCards = Array.isArray(this.cartes);
    });
  }

  get cartesArray(): Carte[] {
    return this.hasCards ? this.cartes as Carte[] : [];
  }
  
}

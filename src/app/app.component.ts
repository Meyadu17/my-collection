import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Region } from './models/region';
import { CardCollectionService } from './card-collection.service';
import { CommonModule } from '@angular/common';

/**
 * standalone: true,
   imports: [RouterModule]
   remplace le routin de app.module.ts, le rendant inutiles
 */
@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  valeur:string ="";
  regionList: Region[];
  selectedTab: number;
  region: any;


  constructor(
    private cardCollectionService: CardCollectionService,
    private route: ActivatedRoute, 
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.regionList = this.cardCollectionService.getAllRegions();
  }

  goToListCard(valeur:string){
    this.router.navigate(['/departement', valeur], { queryParams: { valeur } });
  }

  goToChangePage(valeur:string){
    this.router.navigate([valeur]);
  }

  selectTab(tabId: number) {
    this.selectedTab = tabId;
  }

}

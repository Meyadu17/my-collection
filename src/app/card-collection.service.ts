import { Injectable } from '@angular/core';
import { Region } from './models/region';
import { REGION } from './mock';
import { Departement } from './models/departement';
import { Carte } from './models/carte';

@Injectable({
  providedIn: 'root'
})
export class CardCollectionService {

  constructor() { }

  getAllRegions(): Region[]{
    return REGION;
  }

  getCartesByDepartementId(valeur: string): Carte[] | string {
    const cartesFiltrees: Carte[] = [];
    console.log("getCartesByDepartementId",valeur);
    for (const region of REGION) {
      for (const departement of region.departements) {
        if (departement.valeur === valeur && departement.carte) {
         if (departement.carte) {
            cartesFiltrees.push(...departement.carte);
          }
        }
      }
    }

    return cartesFiltrees.length > 0 ? cartesFiltrees : "message";
  }

}

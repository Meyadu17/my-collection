import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListCardComponent } from './list-card/list-card.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: '', redirectTo:"accueil", pathMatch: "full" },
    { path: 'departement/:valeur', component: ListCardComponent }
];

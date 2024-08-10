import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListCardComponent } from './list-card/list-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: '', redirectTo:"accueil", pathMatch: "full" },
    { path: 'departement/:valeur', component: ListCardComponent },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    /**Route à garder en dernier */
    { path:'**', component: PageNotFoundComponent }

];

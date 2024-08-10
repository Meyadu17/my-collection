import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListCardComponent } from './list-card/list-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ContactComponent } from './contact/contact.component';
import { PlanSiteComponent } from './plan-site/plan-site.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: '', redirectTo:"accueil", pathMatch: "full" },
    { path: 'departement/:valeur', component: ListCardComponent },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'plan-site', component: PlanSiteComponent },
    /**Route à garder en dernier */
    { path:'**', component: PageNotFoundComponent }

];

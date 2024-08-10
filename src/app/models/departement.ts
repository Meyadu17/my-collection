import { Carte } from "./carte";

export class Departement {
    id: number;
    nom: string;
    valeur: string;
    carte?: Carte[];
}
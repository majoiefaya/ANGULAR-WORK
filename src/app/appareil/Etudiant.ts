import { Filiere } from "../filiere/Filiere";

export class Etudiant{

    public nom!:string;
    public prenom!:string;
    public filiere: Filiere = new Filiere;
    public Status:boolean=true;
}
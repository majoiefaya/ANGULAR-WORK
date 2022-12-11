import { AnneAcad } from "../anne-ac/AnneAcad";
import { Etudiant } from "../appareil/Etudiant";

export class Inscription{
    public id!:number;
    public Etudiant!:Etudiant;
    public DateInscription!:Date;
    public AnneAc!: AnneAcad ;
    public Status:boolean=true;
}
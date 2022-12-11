import { NgForm } from "@angular/forms";
import { Filiere } from "../filiere/Filiere";

export class FiliereService{
    public filiere:Filiere=new Filiere();

    filieres:Filiere[]=[
        {
          id:1,
          libelle:"GL",
          nombreEtudiant:14,
          Status:true
        },
        {
            id:2,
            libelle:"CS",
            nombreEtudiant:14,
            Status:true
        },
        {
            id:3,
            libelle:"RSS",
            nombreEtudiant:14,
            Status:true
        },
        {
            id:4,
            libelle:"DW",
            nombreEtudiant:14,
            Status:true
        },
      ]
    
      Addfiliere(registerForm:NgForm){
        this.filieres.push(this.filiere)
      }
  
      ActivateAll(){
        this.filieres.forEach(flr => {
          flr.Status=true;
        });
      }
  
      
      DesActivateAll(){
        this.filieres.forEach(flr => {
          flr.Status=false;
        });
      }
  
      Activate(filiere:any){
    
        filiere.Status=true;
        console.log('activé');
      }
      
      Desactivate(filiere:any){
        filiere.Status=false;
        console.log('Desactivé');
    }
  
}
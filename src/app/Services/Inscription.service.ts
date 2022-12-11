import { NgForm } from "@angular/forms";
import { AnneAcad } from "../anne-ac/AnneAcad";
import { Etudiant } from "../appareil/Etudiant";
import { Inscription } from "../inscription/Inscription";

export class InscriptionService {
    public etudiant:Etudiant=new Etudiant();
    public AnneAcad:AnneAcad=new AnneAcad();
    public inscription:Inscription=new Inscription();
    Inscriptions:Inscription[]=[
        {
            id:1,
            Etudiant:this.etudiant,
            DateInscription: new Date('2022-09-27'),
            AnneAc:this.AnneAcad,
            Status:true
        },
        {
            id:2,
            Etudiant:this.etudiant,
            DateInscription: new Date('2022-09-24'),
            AnneAc:this.AnneAcad,
            Status:true
        },
        {
            id:3,
            Etudiant:this.etudiant,
            DateInscription: new Date('2022-09-22'),
            AnneAc:this.AnneAcad,
            Status:true
        }
        
    ]

    AddEtudiant(registerForm:NgForm){
        this.Inscriptions.push(this.inscription)
      }
  
      ActivateAll(){
        this.Inscriptions.forEach(etdt => {
          etdt.Status=true;
        });
      }
  
      
      DesActivateAll(){
        this.Inscriptions.forEach(inscription => {
          inscription.Status=false;
        });
      }
  
      Activate(inscription:any){
    
        inscription.Status=true;
        console.log('activé');
      }
      
      Desactivate(inscription:any){
        inscription.Status=false;
        console.log('Desactivé');
    }
  
}
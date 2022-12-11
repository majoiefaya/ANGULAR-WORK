import { NgForm } from "@angular/forms";
import { Etudiant } from "../appareil/Etudiant";
import { Filiere } from "../filiere/Filiere";

export class EtudiantService{

  public etudiant:Etudiant=new Etudiant();

  public object:String=new String();

  public filiere:Filiere=new Filiere();
  

  etudiants:Etudiant[]=[
      {
        nom:'Faya',
        prenom:'Lidao',
        filiere: this.filiere,
        Status:true
      },
      {
        nom:'KONDOH',
        prenom:'Jennifer',
        filiere: this.filiere,
        Status:false
      },
      {
        nom:'SouSsoukpo',
        prenom:'David',
        filiere: this.filiere,
        Status:true
      }
    ]
  
    AddEtudiant(registerForm:NgForm){
      this.etudiants.push(this.etudiant)
    }

    ActivateAll(){
      this.etudiants.forEach(etdt => {
        etdt.Status=true;
      });
    }

    
    DesActivateAll(){
      this.etudiants.forEach(etdt => {
        etdt.Status=false;
      });
    }

    Activate(etudiant:any){
  
      etudiant.Status=true;
      console.log('activé');
    }
    
    Desactivate(etudiant:any){
      etudiant.Status=false;
      console.log('Desactivé');
  }

  RechercheEtudiant(object:any){
    this.etudiants.forEach(etdt => {
      if(object==etdt.nom){
        console.log(object);
        this.etudiants=[
          {
            nom:etdt.nom,
            prenom:etdt.prenom,
            filiere: etdt.filiere,
            Status:etdt.Status
          }
        ]
      }
    });
  }
}
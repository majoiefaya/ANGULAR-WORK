import { Component, OnInit } from '@angular/core';

import { Etudiant } from './Etudiant';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  public Etudiant:Etudiant=new Etudiant();

  affichage:boolean=true;

  etudiants:Etudiant[]=[
    {
     nom:'Faya',
     prenom:'Lidao',
     Filiere:'GL',
     Status:true
    },
    {
     nom:'KONDOH',
     prenom:'Jennifer',
     Filiere:'GL',
     Status:false
    },
    {
      nom:'SouSsoukpo',
      prenom:'David',
      Filiere:'GL',
      Status:true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  EnregistrerEtudiant(registerForm:NgForm){
    this.etudiants.push(this.Etudiant)
    this.Etudiant=new Etudiant();
    console.log(registerForm.form);
    console.log(this.Etudiant.Status);
  }

  afficherFormulaire(){
    this.affichage=false;
  }

  afficherEtudiants(){
    this.affichage=true;
  }

 
  Activer(etudiant:any){
  
      etudiant.Status=true;
      console.log('activé');
  }

  Desactiver(etudiant: { Status: boolean; }){
      etudiant.Status=false;
      console.log('Desactivé');
  }
}

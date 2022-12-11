import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { EtudiantService } from '../Services/etudiant.service';
import { FiliereService } from '../Services/filiere.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  affichage:boolean=true;

  Etudiant=this.etudiantService.etudiant;
  
  object=this.etudiantService.object;

  etudiants=this.etudiantService.etudiants;

  filieres=this.filiereService.filieres;
  
  constructor(private etudiantService:EtudiantService,private filiereService:FiliereService) { }

  ngOnInit(): void {
  }

  afficherFormulaire(){
    this.affichage=false;
  }

  afficherEtudiants(){
    this.affichage=true;
  }

  EnregistrerEtudiant(registerForm:NgForm){
    this.etudiantService.AddEtudiant(registerForm);
  }
  
  ActivateAction(etudiant:any){
   this.etudiantService.Activate(etudiant);
  }


  DesactivateAction(etudiant:any){
    this.etudiantService.Desactivate(etudiant);
  }

  ActivateAll(){
    this.etudiantService.ActivateAll();
  }
  
  DesActivateAll(){
    this.etudiantService.DesActivateAll();
  }
  Recherche(){
    this.etudiantService.RechercheEtudiant(this.object);
  }

}

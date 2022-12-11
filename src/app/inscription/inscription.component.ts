import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InscriptionService } from '../Services/Inscription.service';
import { EtudiantService } from '../Services/etudiant.service';
import { AnneAcadService } from '../Services/AnneAc.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptions=this.inscriptionService.Inscriptions;
  etudiants=this.etudiantService.etudiants;
  anneAcads=this.anneAcadService.AnneAc;
  inscription=this.inscriptionService.inscription;
  affichage:boolean=true;
  constructor(
    private inscriptionService:InscriptionService,
    private etudiantService:EtudiantService,
    private anneAcadService:AnneAcadService) { }

  ngOnInit(): void {
  }

  afficherFormulaire(){
    this.affichage=false;
  }

  afficherInscriptions(){
    this.affichage=true;
  }

  EnregistrerInscription(registerForm:NgForm){
    this.inscriptionService.AddEtudiant(registerForm);
  }
  
  ActivateAction(etudiant:any){
   this.inscriptionService.Activate(etudiant);
  }


  DesactivateAction(etudiant:any){
    this.inscriptionService.Desactivate(etudiant);
  }

  ActivateAll(){
    this.inscriptionService.ActivateAll();
  }
  
  DesActivateAll(){
    this.inscriptionService.DesActivateAll();
  }

}

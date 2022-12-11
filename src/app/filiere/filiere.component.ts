import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FiliereService } from '../Services/filiere.service';
@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

  affichage:boolean=true;

  Filiere=this.filiereService.filiere;

  filieres=this.filiereService.filieres;

  constructor(private filiereService:FiliereService) { }

  ngOnInit(): void {
  }

  afficherFormulaire(){
    this.affichage=false;
  }

  afficherFiliere(){
    this.affichage=true;
  }

  EnregistrerFiliere(registerForm:NgForm){
    this.filiereService.Addfiliere(registerForm);
  }
  
  ActivateAction(filiere:any){
   this.filiereService.Activate(filiere);
  }


  DesactivateAction(filiere:any){
    this.filiereService.Desactivate(filiere);
  }

  ActivateAll(){
    this.filiereService.ActivateAll();
  }
  
  DesActivateAll(){
    this.filiereService.DesActivateAll();
  }

}

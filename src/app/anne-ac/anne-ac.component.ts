import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnneAcadService } from '../Services/AnneAc.service';

@Component({
  selector: 'app-anne-ac',
  templateUrl: './anne-ac.component.html',
  styleUrls: ['./anne-ac.component.css']
})
export class AnneAcComponent implements OnInit {

  AnneAcs=this.AnneAcadService.AnneAc;
  AnneAc=this.AnneAcadService.AnneAcad;
  affichage:boolean=true;

  constructor(private AnneAcadService:AnneAcadService) { }

  ngOnInit(): void {
  }
  afficherFormulaire(){
    this.affichage=false;
  }

  afficherAnneAcad(){
    this.affichage=true;
  }

  EnregistrerAnneAcad(registerForm:NgForm){
    this.AnneAcadService.AddAnneAcad(registerForm);
  }
  
  ActivateAction(AnneAcad:any){
   this.AnneAcadService.Activate(AnneAcad);
  }


  DesactivateAction(AnneAcad:any){
    this.AnneAcadService.Desactivate(AnneAcad);
  }

  ActivateAll(){
    this.AnneAcadService.ActivateAll();
  }
  
  DesActivateAll(){
    this.AnneAcadService.DesActivateAll();
  }

}

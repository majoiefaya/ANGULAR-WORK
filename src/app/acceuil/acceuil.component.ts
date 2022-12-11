import { Component, OnInit } from '@angular/core';
import { FiliereService } from '../Services/filiere.service';
import { InscriptionService } from '../Services/Inscription.service';
import { EtudiantService } from '../Services/etudiant.service';
import { AnneAcadService } from '../Services/AnneAc.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  public nbreEtudiants=this.etudiantService.etudiants.length;
  public nbreFilieres=this.filiereService.filieres.length;
  public nbreAnnAc=this.anneAcad.AnneAc.length;
  public nbreInscriptions=this.inscriptionService.Inscriptions.length;
  constructor(
    private etudiantService:EtudiantService,
    private inscriptionService:InscriptionService,
    private anneAcad:AnneAcadService,
    private  filiereService:FiliereService) { }

  ngOnInit(): void {
  }


}

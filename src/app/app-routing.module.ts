import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AnneAcComponent } from './anne-ac/anne-ac.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FiliereComponent } from './filiere/filiere.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path:'acceuil',component:AcceuilComponent},
  {path:'etudiant',component:AppareilComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'AnneAc',component:AnneAcComponent},
  {path:'filiere',component:FiliereComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

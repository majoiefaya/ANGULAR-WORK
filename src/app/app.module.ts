import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantService } from './Services/etudiant.service';
import { AnneAcadService } from './Services/AnneAc.service'; 
import { FiliereService } from './Services/filiere.service';
import { InscriptionService } from './Services/Inscription.service';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AnneAcComponent } from './anne-ac/anne-ac.component';
import { ContenuComponent } from './contenu/contenu.component';
import { FiliereComponent } from './filiere/filiere.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    AcceuilComponent,
    InscriptionComponent,
    AnneAcComponent,
    ContenuComponent,
    FiliereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EtudiantService,
    FiliereService,
    AnneAcadService,
    InscriptionService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

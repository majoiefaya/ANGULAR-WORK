import { NgForm } from "@angular/forms";
import { AnneAcad } from "../anne-ac/AnneAcad";

export class AnneAcadService{
    
    public AnneAcad:AnneAcad=new AnneAcad();
    AnneAc:AnneAcad[]=[
    {
      libelle:"2021-2022",
      Status:true
    },
    {
        libelle:"2021-2022",
        Status:true
    },
    {
        libelle:"2021-2022",
        Status:true
    }

    
  ]

  AddAnneAcad(registerForm:NgForm){
    this.AnneAc.push(this.AnneAcad)
  }

  ActivateAll(){
    this.AnneAc.forEach(etdt => {
      etdt.Status=true;
    });
  }

  
  DesActivateAll(){
    this.AnneAc.forEach(etdt => {
      etdt.Status=false;
    });
  }

  Activate(AnneAcad:any){

    AnneAcad.Status=true;
    console.log('activé');
  }
  
  Desactivate(AnneAcad:any){
    AnneAcad.Status=false;
    console.log('Desactivé');
}

}
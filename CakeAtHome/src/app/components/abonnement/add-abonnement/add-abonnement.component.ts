import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Abonnement } from 'src/app/models/abonnement/abonnement';
import { AbonnementService } from 'src/app/services/abonnement/abonnement.service';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.css']
})
export class AddAbonnementComponent implements OnInit{
  declare formAddAbonnement : FormGroup;
  declare abonnement : Abonnement;

  constructor(
    private abonnementService :AbonnementService,
    private utilisateurService:UtilisateurService,
    private router : Router,
    private formBuilder:FormBuilder,
  ){

  }
 ngOnInit(): void {
    this.formAddAbonnement= this.formBuilder.group({
      id_abonnement: ['',Validators.required],
      id_utilisateur: [''],
      abonnementpris: ['',Validators.required],
      abonnementdatedebut: ['',Validators.required],
      abonnementduree :['',Validators.required],


    })
}
create(){
  this.utilisateurService.editUser(this.formAddAbonnement.value.id_utilisateur).subscribe(
    (utilisateur) => {
      this.formAddAbonnement.value.utilisateur = utilisateur;
      this.abonnementService.saveUser(this.formAddAbonnement.value).subscribe(
        () => {
          this.router.navigate(['/abonnement'])

       }

  )
}
  )
}
}

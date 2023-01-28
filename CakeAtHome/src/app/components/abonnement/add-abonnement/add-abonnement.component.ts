import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbonnementService } from 'src/app/services/abonnement/abonnement.service';

@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.css']
})
export class AddAbonnementComponent implements OnInit{
  declare formAddAbonnement : FormGroup;
  constructor(
    private abonnementService :AbonnementService,
    private router : Router,
    private formBuilder:FormBuilder,
  ){

  }
 ngOnInit(): void {
    this.formAddAbonnement= this.formBuilder.group({
      id_abonnement: ['',Validators.required],
      id_utilisateur: ['',Validators.required],
      abonnementpris: ['',Validators.required],
      abonnementdatedebut: ['',Validators.required],
      abonnementduree :['',Validators.required],


    })
}
create(){
  console.log(this.formAddAbonnement.value);

  this.abonnementService.saveUser(this.formAddAbonnement.value).subscribe(

      () =>{
        this.router.navigate(['/abonnement'])

       }

  )
}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.css']
})
export class AddRecetteComponent implements OnInit{
  declare formaddRecette: FormGroup;
  constructor (
    private recetteService: RecetteService,
    private formBuilder: FormBuilder,
    private router : Router,

  ){}
    ngOnInit(): void {
        this.formaddRecette = this.formBuilder.group({
        titre_recette:['',Validators.required],
        date_recette:['',Validators.required],
        description_recette:['',Validators.required],
        categorie_recette:['',Validators.required],
        niveaudifficulte_recette:['',Validators.required],
        tempspreparation_recette:['',Validators.required],
        tempscuisson_recette:['',Validators.required],
        tempstotal_recette:['',Validators.required],
        nbpersonne_recette:['',Validators.required],
        recettepremium_recette:['',Validators.required],
        id_utilisateur:['',Validators.required],
        })
  }
  create(){
    
    console.log(this.formaddRecette.value);
    this.recetteService.saveRecette(this.formaddRecette.value).subscribe(
      () =>{
        this.router.navigate(['postrecette']);
      }
    );
  }
 }




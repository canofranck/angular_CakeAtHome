import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecetteService } from 'src/app/services/recette/recette.service';

@Component({
  selector: 'app-postrecette',
  templateUrl: './postrecette.component.html',
  styleUrls: ['./postrecette.component.css']
})
export class PostrecetteComponent implements OnInit{
  declare form: FormGroup;
  constructor (
    private recetteService: RecetteService,
    private formBuilder: FormBuilder,
    private router : Router,
  ){}
    ngOnInit(): void {
        this.form = this.formBuilder.group({
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
    console.log(this.form.value);
    this.recetteService.saveRecette(this.form.value).subscribe(
      () =>{
        this.router.navigate(['/postrecette']);
      }
    );
  }
 }




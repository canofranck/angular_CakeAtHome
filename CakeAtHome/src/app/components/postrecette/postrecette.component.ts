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
          titre_recette:['',],
          date_recette:['',],
          description_recette:['',],
          categorie_recette:['',],
          niveaudifficulte_recette:['',],
          tempspreparation_recette:['',],
          tempscuisson_recette:['',],
          tempstotal_recette:['',],
          nbpersonne_recette:['',],
          recettepremium_recette:['',],
          id_utilisateur:['3',],
        })
  }
  create(){

    console.log(this.form.value);
    this.recetteService.saveRecette(this.form.value).subscribe(
      () =>{
        this.router.navigate(['postrecette']);
      }
    );
  }
 }




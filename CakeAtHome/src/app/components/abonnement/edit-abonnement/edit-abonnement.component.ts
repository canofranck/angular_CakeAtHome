import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Abonnement } from 'src/app/models/abonnement/abonnement';
import { AbonnementService } from 'src/app/services/abonnement/abonnement.service';

@Component({
  selector: 'app-edit-abonnement',
  templateUrl: './edit-abonnement.component.html',
  styleUrls: ['./edit-abonnement.component.css']
})
export class EditAbonnementComponent implements OnInit {

  declare editabonnementForm: FormGroup;
  declare abonnement: Abonnement;
  constructor(
    private abonnementService : AbonnementService,
    private router : Router,
    private route: ActivatedRoute,
    private formBuilder:FormBuilder,
  ) { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.editabonnementForm = this.formBuilder.group({
      id_abonnement: ['',Validators.required],
      id_utilisateur: [''],
      abonnementpris: ['',Validators.required],
      abonnementdatedebut: ['',Validators.required],
      abonnementduree :['',Validators.required],

    })
    //récupere le produit via l'id
    this.abonnementService.editUser(id).subscribe(
      data => {
        console.log(data)
        //complete le form avec le produit récupéré
        this.editabonnementForm.setValue(data);
      }
    )
  }
  update() {

    if (this.editabonnementForm.valid) {

      console.log(this.editabonnementForm.value);

      this.abonnementService.updateUser(this.editabonnementForm.value).subscribe(
        () => {
          this.router.navigate(['/abonnement'])

        }
      )
    }
  }

}

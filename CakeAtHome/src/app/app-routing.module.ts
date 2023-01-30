import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { AddAbonnementComponent } from './components/abonnement/add-abonnement/add-abonnement.component';
import { EditAbonnementComponent } from './components/abonnement/edit-abonnement/edit-abonnement.component';

import { ListAbonnementComponent } from './components/abonnement/list-abonnement/list-abonnement.component';
import { AddCommentaireComponent } from './components/commentaire/add-commentaire/add-commentaire.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { EditCommentaireComponent } from './components/commentaire/edit-commentaire/edit-commentaire.component';
import { ListCommentaireComponent } from './components/commentaire/list-commentaire/list-commentaire.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { PostrecetteComponent } from './components/postrecette/postrecette.component';
import { AddRecetteComponent } from './components/recette/add-recette/add-recette.component';
import { EditRecetteComponent } from './components/recette/edit-recette/edit-recette.component';
import { ListRecetteComponent } from './components/recette/list-recette/list-recette.component';
import { RecetteComponent } from './components/recette/recette.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { EditUtilisateurComponent } from './components/utilisateur/edit-utilisateur/edit-utilisateur.component';

import { ListUtilisateurComponent } from './components/utilisateur/list-utilisateur/list-utilisateur.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';


const routes: Routes = [
  {path:'',component:HomeComponent  },
  {path:'recette',component:RecetteComponent  },
  {path:'contact',component:ContactComponent },
  {path:'postrecette',component:PostrecetteComponent },
  {path:'ingredients',component:IngredientsComponent},

  {path:'utilisateur',component:UtilisateurComponent},
  {path:'utilisateur/:id',component:ListUtilisateurComponent},
  {path:'addutilisateur',component:AddUtilisateurComponent},
  {path:'editutilisateur/:id',component:EditUtilisateurComponent},
  // {path:'listutilisateur',component:ListUtilisateurComponent},
  {path:'recette',component:RecetteComponent},
  {path:'recette/:id',component:ListRecetteComponent},
  {path:'addrecette',component:AddRecetteComponent},
  {path:'editrecette/:id',component:EditRecetteComponent},
  {path:'listrecette',component:ListRecetteComponent},

  {path:'abonnement',component:AbonnementComponent},
  {path:'abonnement/:id',component:ListAbonnementComponent},
  {path:'addabonnement',component:AddAbonnementComponent},
  {path:'editabonnement/:id',component:EditAbonnementComponent},
  {path:'listabonnement',component:ListAbonnementComponent},

  {path:'commentaire',component:CommentaireComponent},
  {path:'commentaire/:id',component:ListCommentaireComponent},
  {path:'addcommentaire',component:AddCommentaireComponent},
  {path:'editcommentaire',component:EditCommentaireComponent},
  {path:'listcommentaire',component:ListCommentaireComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { PostrecetteComponent } from './components/postrecette/postrecette.component';
import { AddRecetteComponent } from './components/recette/add-recette/add-recette.component';
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
  {path:'addutilisateur',component:AddUtilisateurComponent},
  {path:'addrecette',component:AddRecetteComponent},
  {path:'listutilisateur',component:ListUtilisateurComponent},
  {path:'utilisateur',component:UtilisateurComponent},
  {path:'editutilisateur/:id',component:EditUtilisateurComponent},
  {path:'listutilisateur',component:ListUtilisateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

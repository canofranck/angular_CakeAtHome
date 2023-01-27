import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetteComponent } from './components/recette/recette.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LastrecipesComponent } from './components/lastrecipes/lastrecipes.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { PopulaireComponent } from './components/populaire/populaire.component';
import { TendanceComponent } from './components/tendance/tendance.component';
import { RandomComponent } from './components/random/random.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostrecetteComponent } from './components/postrecette/postrecette.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { EtapeComponent } from './components/etape/etape.component';
import { ImagerecetteComponent } from './components/imagerecette/imagerecette.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component';
import { EditUtilisateurComponent } from './components/utilisateur/edit-utilisateur/edit-utilisateur.component';
import { ListUtilisateurComponent } from './components/utilisateur/list-utilisateur/list-utilisateur.component';
import { ListRecetteComponent } from './components/recette/list-recette/list-recette.component';
import { AddRecetteComponent } from './components/recette/add-recette/add-recette.component';
import { EditRecetteComponent } from './components/recette/edit-recette/edit-recette.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetteComponent,
    HeaderComponent,
    FooterComponent,
    LastrecipesComponent,
    CategorieComponent,
    PopulaireComponent,
    TendanceComponent,
    RandomComponent,
    HomeComponent,
    ContactComponent,
    PostrecetteComponent,
    IngredientsComponent,
    AbonnementComponent,
    CommentaireComponent,
    EtapeComponent,
    ImagerecetteComponent,
    UtilisateurComponent,
    AddUtilisateurComponent,
    EditUtilisateurComponent,
    ListUtilisateurComponent,
    ListRecetteComponent,
    AddRecetteComponent,
    EditRecetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

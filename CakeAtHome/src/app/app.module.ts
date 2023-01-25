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
    PostrecetteComponent
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PostrecetteComponent } from './components/postrecette/postrecette.component';
import { RecetteComponent } from './components/recette/recette.component';

const routes: Routes = [
  {path:'',component:HomeComponent  },
  {path:'recette',component:RecetteComponent  },
  {path:'contact',component:ContactComponent },
  {path:'postrecette',component:PostrecetteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

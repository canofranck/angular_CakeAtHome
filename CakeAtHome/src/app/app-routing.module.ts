import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecetteComponent } from './components/recette/recette.component';

const routes: Routes = [
  {path:'',component:HomeComponent  },
  {path:'recette',component:RecetteComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

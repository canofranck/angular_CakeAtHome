import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recette } from "src/app/models/recette/recette";
import { AppSettings } from "src/app/settings/app.settings";

// @Injectable({providedIn: 'root'})
@Injectable({
  providedIn: 'root'
})
export class RecetteService {


  constructor(private http:HttpClient) {}
  findAllRecettes(){
    return this.http.get(AppSettings.APP_URL+"/recette");
  }
  saveProduit (recette:Recette){
    return this.http.post(AppSettings.APP_URL+"/recette",recette);
  }
  }

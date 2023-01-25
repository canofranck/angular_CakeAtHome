export class Recette {
   public id_recette:number;
   public titre_recette:string;
   public date_recette:Date;
   public description_recette:string;
   public categorie_recette: string;
   public niveaudifficulte_recette:string;
   public tempspreparation_recette:string;
   public tempscuisson_recette:string;
   public tempstotal_recette:string;
   public nbpersonne_recette:string;
   public recettepremium_recette:boolean;
  public id_utilisateur:number;
   constructor (){
    this.id_recette=0;
    this.titre_recette="";
    this.date_recette=new Date();
    this.description_recette="";
    this.categorie_recette="";
    this.niveaudifficulte_recette="";
    this.tempspreparation_recette="";
    this.tempscuisson_recette="";
    this.tempstotal_recette="";
    this.nbpersonne_recette="";
    this.recettepremium_recette=false;
    this.id_utilisateur=5;

   }
}

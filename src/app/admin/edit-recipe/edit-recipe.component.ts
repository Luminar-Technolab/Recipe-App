import { Component } from '@angular/core';
import { RecipeModel } from '../recipeModel';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {
  id:string=""
  newRecipe:RecipeModel = {}
  instructions:string[] = []
  ingredients:string[] = []
  mealType:string[]=[]
  
  constructor(private route:ActivatedRoute,private api:ApiService){

  }

  ngOnInt(){
    this.route.params.subscribe((res:any)=>{
      this.id = res.id
      this.getRecipeDetails(this.id)
    })
    
  }
  getRecipeDetails(id:any){
    this.api.getARecipeAPI(id).subscribe((res:any)=>{
      this.newRecipe = res
      console.log(res);
      
    })
  }
}

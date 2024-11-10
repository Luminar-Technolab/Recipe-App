import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipe',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.css'
})
export class ViewRecipeComponent {

  recipeId:string=""
  recipe:any = {}
  allRelatedRecipes:any = []
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

  ngOnInit(){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.recipeId = res.id
      this.viewRecipe(this.recipeId)
    })
  }

  viewRecipe(id:string){
    this.api.getARecipeAPI(id).subscribe((res:any)=>{
      this.recipe = res
      this.getAllRelatedRecipes(res.cuisine)
    })
  }

  getAllRelatedRecipes(cuisine:string){
    this.api.getAllRelatedRecipes(cuisine).subscribe((res:any)=>{
      this.allRelatedRecipes = res.slice(0,4)
      console.log(this.allRelatedRecipes);
      
    })
  }
}

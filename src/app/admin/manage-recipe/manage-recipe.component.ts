import { Component, Input } from '@angular/core';
import { RecipeModel } from '../recipeModel';
import { ApiService } from '../../services/api.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-recipe',
  templateUrl: './manage-recipe.component.html',
  styleUrl: './manage-recipe.component.css'
})
export class ManageRecipeComponent {
  @Input() id!:string
  newRecipe:RecipeModel = {}
  instructions:any = []
  ingredients:any = []
  mealType:any=[]

  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute){
  }

  ngOnInit(){
    console.log(this.id);

    if(this.id){
      console.log(this.id);
      
      this.getRecipeDetails(this.id)
    }
  }

  getRecipeDetails(id:any){
    this.api.getARecipeAPI(id).subscribe((res:any)=>{
      this.newRecipe = res
      console.log(this.newRecipe);
      this.instructions = this.newRecipe.instructions
      this.ingredients = this.newRecipe.ingredients
      this.mealType = this.newRecipe.mealType
    })
  }

  addInstructions(value:string){
    this.instructions.push(value)
  }
  addIngredients(value:string){
    this.ingredients.push(value)

  }
  removeIngredients(index:number){
   this.ingredients = this.ingredients.filter((item:any,i:any)=>i!=index)

  }
  removeInstructions(index:number){
    this.instructions = this.instructions.filter((item:any,i:any)=>i!=index)
   }

   mealChecked(event:any){
    if(event.target.checked) {
      !this.mealType.includes(event.target.name) && this.mealType.push(event.target.name)
    }else{
      this.mealType = this.mealType.filter((item:any)=>item!=event.target.name)
    }
   }

   deleteMealType(meal:any){
    this.mealType = this.mealType.filter((item:any)=>item!=meal)
   }
  addRecipe(){
    this.newRecipe.instructions = this.instructions
    this.newRecipe.ingredients = this.ingredients
    this.newRecipe.mealType = this.mealType
    const {name,ingredients,instructions,caloriesPerServing,cookTimeMinutes,prepTimeMinutes,servings,image,cuisine,difficulty,mealType} = this.newRecipe
    if(name && ingredients!.length>0 && instructions!.length>0 && caloriesPerServing && cookTimeMinutes && prepTimeMinutes && servings && image && cuisine && difficulty && mealType!.length>0){
      console.log(this.newRecipe);
      this.api.addRecipeAPI(this.newRecipe).subscribe({
        next:(res:any)=>{
          alert("Recipe Added Successfully")
          this.router.navigateByUrl('/admin/recipe-list')
          this.newRecipe = {}
          this.instructions = []
          this.ingredients = []
          this.mealType=[]
        },
        error:(reason:any)=>{
          alert(reason.error)
          this.newRecipe = {}
          this.instructions = []
          this.ingredients = []
          this.mealType=[]
        }
      })

    }else{
      alert("Please fill the form completely!!!")
    }
  }

  updateRecipe(){
    this.newRecipe.instructions = this.instructions
    this.newRecipe.ingredients = this.ingredients
    this.newRecipe.mealType = this.mealType
    const {name,ingredients,instructions,caloriesPerServing,cookTimeMinutes,prepTimeMinutes,servings,image,cuisine,difficulty,mealType} = this.newRecipe
    if(name && ingredients!.length>0 && instructions!.length>0 && caloriesPerServing && cookTimeMinutes && prepTimeMinutes && servings && image && cuisine && difficulty && mealType!.length>0){
      console.log(this.newRecipe);
      this.api.editRecipeAPI(this.id,this.newRecipe).subscribe((res:any)=>{
        alert("Recipe Updated Successfully")
          this.router.navigateByUrl('/admin/recipe-list')
          this.newRecipe = {}
          this.instructions = []
          this.ingredients = []
          this.mealType=[]
      })

    }else{
      alert("Please fill the form completely!!!")
    }
  }
}

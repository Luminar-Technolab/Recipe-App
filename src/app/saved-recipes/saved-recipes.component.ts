import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-recipes',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './saved-recipes.component.html',
  styleUrl: './saved-recipes.component.css'
})
export class SavedRecipesComponent {

  allRecipes:any = []

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllSavedItems()
  }

  getAllSavedItems(){
    this.api.getAllSavedRecipeAPI().subscribe((res:any)=>{
      this.allRecipes = res
    })
  }
  removeRecipe(id:any){
    this.api.deleteSavedRecipeAPI(id).subscribe((res:any)=>{
      this.getAllSavedItems()
    })
  }
}

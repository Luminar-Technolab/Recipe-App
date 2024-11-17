import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [FormsModule,SearchPipe,NgxPaginationModule,HeaderComponent,FooterComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  p: number = 1;
  allRecipes:any = []
  searchRecipe:string = ""
  constructor(private api:ApiService,private router:Router){}

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      this.allRecipes = res
      console.log(this.allRecipes);
    })
  }

  getRecipes(recipeType:string,recipeName:any){
    this.allRecipes = this.allRecipes.filter((item:any)=>item[recipeType].includes(recipeName))
  }

  viewRecipe(recipeId:string){
    if(sessionStorage.getItem("token")){
      this.router.navigateByUrl(`${recipeId}/view-recipe`)
    }else{
      alert("Please login to view the recipe in detail!!!")
    }
  }
}

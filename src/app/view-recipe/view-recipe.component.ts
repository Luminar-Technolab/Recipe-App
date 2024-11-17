import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import jspdf from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-view-recipe',
  standalone: true,
  imports: [HeaderComponent,RouterLink,FooterComponent],
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

  saveRecipe(){
    const {_id,name,cuisine,image} = this.recipe
    this.api.saveRecipeAPI({id:_id,name,cuisine,image}).subscribe({
      next:((res:any)=>{
        alert("Item Added to your Saved Recipe Collection")
      }),
      error:((err:any)=>{
        console.log(err);
        
        alert(err.error)
      })
    })
  }

  generatePDF(){
    this.api.saveDownloadRecipeAPI(this.recipeId).subscribe((res:any)=>{
      this.getPDF()
    })
  }

  getPDF(){
    let pdf = new jspdf('p', 'mm', 'a4')
    let head = [['Ingredients Needed','Cooking Instruction']]
    let body:any = []
    body.push([this.recipe.ingredients,this.recipe.instructions])
    pdf.setFontSize(16)
    pdf.setTextColor("red")
    pdf.text(this.recipe.name,10,10)
    pdf.setFontSize(12)
    pdf.setTextColor("black")

    pdf.text(`Cuisine : ${this.recipe.cuisine}`,10,20)
    pdf.text(`Servings : ${this.recipe.servings}`,10,25)
    pdf.text(`Mode of Cooking : ${this.recipe.difficulty}`,10,30)
    pdf.text(`Total Preparation Time : ${this.recipe.prepTimeMinutes} Minutes`,10,35)
    pdf.text(`Total Cooking Time : ${this.recipe.cookTimeMinutes} Minutes`,10,40)
    pdf.text(`Calorie per Servings : ${this.recipe.caloriesPerServing}`,10,45)

    autoTable(pdf,{head,body,startY:50})
    // autoTable(pdf,{html:'#downloadRecipe'})
    pdf.output('dataurlnewwindow')
    pdf.save('recipe.pdf')
  }
}

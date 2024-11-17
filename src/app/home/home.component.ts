import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeRecipes:any = []
  allTestimony:any = []

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllHomeRecipes()
    this.getAllTestimony()
  }

  getAllHomeRecipes(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      this.homeRecipes = res.slice(0,6)
      console.log(this.homeRecipes);
      
    })
  }
  getAllTestimony(){
    this.api.getAllTestimony().subscribe((res:any)=>{
      this.allTestimony = res
      console.log(this.allTestimony);
      
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url:string = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  getAllRecipesAPI(){
   return this.http.get(`${this.server_url}/get-all-recipes`)
  }

  //add-testimony
  addTestimony(data:any){
    return this.http.post(`${this.server_url}/add-testimony`,data)
  }

  //register
  register(data:any){
    return this.http.post(`${this.server_url}/register`,data)
  }

  //login
  login(data:any){
    return this.http.post(`${this.server_url}/login`,data)
  }

  //recipes/:id/view
  getARecipeAPI(id:string){
    return this.http.get(`${this.server_url}/recipes/${id}/view`)
   }

   //get-related-recipes
   getAllRelatedRecipes(cuisine:string){
    console.log(cuisine);
    
    return this.http.get(`${this.server_url}/get-related-recipes?cuisine=${cuisine}`)
   }
   //get-all-testimony
   getAllTestimony(){
    return this.http.get(`${this.server_url}/get-all-testimony`)
   }
}

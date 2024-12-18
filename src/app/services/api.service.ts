import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../admin/interfaces/recipe';
import { RecipeModel } from '../admin/recipeModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url:string = "http://localhost:4000"
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
    //append token to http header
  appendToken(){
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if(token){
      headers = headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }
   //add-saved-recipe
   saveRecipeAPI(recipe:any){
    return this.http.post(`${this.server_url}/add-saved-recipe`,recipe,this.appendToken())
   }
   //all-saved-recipe
   getAllSavedRecipeAPI (){
    return this.http.get(`${this.server_url}/all-saved-recipe`,this.appendToken())
   }

   //id/remove-saved-recipe
   deleteSavedRecipeAPI (id:any){
    return this.http.delete(`${this.server_url}/${id}/remove-saved-recipe`,this.appendToken())
   }

   //download-recipe/:id/add
   saveDownloadRecipeAPI(recipeId:any){
    return this.http.get(`${this.server_url}/download-recipe/${recipeId}/add`,this.appendToken())
   }
   //get-all-users
   getAllUsersAPI(){
    return this.http.get(`${this.server_url}/get-all-users`,this.appendToken())

   }
   //get-all-downloads
   getAllDownloadsAPI(){
    return this.http.get(`${this.server_url}/get-all-downloads`,this.appendToken())
   }

   //add-recipe
   addRecipeAPI(recipeDetails:RecipeModel){
    return this.http.post(`${this.server_url}/add-recipe`,recipeDetails,this.appendToken())
   }

   //recipe/:id/edit
   editRecipeAPI(id:any,recipeDetails:RecipeModel){
    return this.http.put(`${this.server_url}/recipe/${id}/edit`,recipeDetails,this.appendToken())
   }
   //recipe/:id/remove
   deleteRecipeAPI(id:any){
    return this.http.delete(`${this.server_url}/recipe/${id}/remove`,this.appendToken())
   }

   //testimony/:id/edit
   editTestimonyAPI(id:string,status:string){
    return this.http.get(`${this.server_url}/testimony/${id}/edit?status=${status}`,this.appendToken())
   }
}

import { HttpClient,HttpHeaders } from '@angular/common/http';
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
   
}

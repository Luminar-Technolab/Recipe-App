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
}

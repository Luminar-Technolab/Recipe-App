import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private api:ApiService) { }

  //get-all-users
  getAllUsers(){
    
  }
}

import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string = ""
  password:string = ""

  constructor(private api:ApiService,private router:Router){}

  login(){
    this.api.login({email:this.email,password:this.password}).subscribe({
      next:((res:any)=>{
        sessionStorage.setItem("user",JSON.stringify(res.user))
        sessionStorage.setItem("token",res.token)
        this.router.navigateByUrl('/')
      }),
      error:((err:any)=>{
        alert(err)
      })
    })
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username:string = ""
  email:string = ""
  password:string=""

  constructor(private api:ApiService,private router:Router){}

  register(){
    this.api.register({username:this.username,email:this.email,password:this.password}).subscribe({
      next:(res:any)=>{
        alert(`Welcome ${res.username}, please login to get full access to our site...`)
        this.router.navigateByUrl('/login')
      },
      error:((err:any)=>{
        alert(err)
      })
    })

  }
}

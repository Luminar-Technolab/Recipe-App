import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  mail:string = "xyz@gmail.com"
  email:string = ""
  name:string = ""
  message:string = ""

  constructor(private api:ApiService){}

  addTestimony(){
    if(this.name && this.email && this.message){
      this.api.addTestimony({name:this.name,email:this.email,message:this.message}).subscribe((res:any)=>{
        alert("Thank you for adding your testimony with us...")
        this.name = ""
        this.email = ""
        this.message = ""
      })
    }else{
      alert("Please fill the form completely!!!")
    }
    
  }

}

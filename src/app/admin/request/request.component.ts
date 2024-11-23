import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {
  allRequests:any = []

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllRequest()
  }
  getAllRequest(){
    this.api.getAllTestimony().subscribe((res:any)=>{
      this.allRequests = res
    })
  }

  updateStatus(id:string,status:string){
    this.api.editTestimonyAPI(id,status).subscribe((res:any)=>{
      this.getAllRequest()
    })
  }
}

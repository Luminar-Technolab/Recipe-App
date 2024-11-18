import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrl: './download-list.component.css'
})
export class DownloadListComponent {

  allDownloads:any = []
  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllDownloads()
  }
  getAllDownloads(){
    this.api.getAllDownloadsAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allDownloads = res
      },
      error:(reason:any)=>{
        console.log(reason);
        
      }
    })
  }
}

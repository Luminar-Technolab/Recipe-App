import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../../services/api.service';
import HC_exporting from 'highcharts/modules/exporting';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  selected = new Date()
  requestCount:number = 0
  userCount:number = 0
  downloadCount:number = 0
  recipeCount:number = 0
  open:boolean = true
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Analysis of Download Recipes based on Cuisine',
      align: 'left'
  },
  xAxis: {
    type: 'category'
},
yAxis: {
    title: {
        text: 'Total Download recipe Count'
    }

},
credits:{
  enabled:false
},
legend: {
    enabled: false
},
series: [
  {
      name: 'Browsers',
      colorByPoint: true,
      type:'bar',
      data: [
          {
              name: 'Chrome',
              y: 63.06
          },
          {
              name: 'Safari',
              y: 19.84
          },
          {
              name: 'Firefox',
              y: 4.18
          },
          {
              name: 'Edge',
              y: 4.12
          },
          {
              name: 'Opera',
              y: 2.33
          },
          {
              name: 'Internet Explorer',
              y: 0.45
          },
          {
              name: 'Other',
              y: 1.582
          }
      ]
  }
],
  };

  constructor(private api:ApiService,private router:Router){
    HC_exporting(Highcharts)
  }

  ngOnInit(){
    this.getRequestCount()
    this.getDownloadCount()
    this.getRecipeCount()
    this.getUsersCount()
  }

  getRequestCount(){
    this.api.getAllTestimony().subscribe((res:any)=>{
      this.requestCount = res.filter((item:any)=>item.status=="Pending").length
    })
  }
  getUsersCount(){
    this.api.getAllUsersAPI().subscribe((res:any)=>{
      this.userCount = res.length
    })
  }
  getRecipeCount(){
    this.api.getAllRecipesAPI().subscribe((res:any)=>{
      this.recipeCount = res.length
    })
  }

  getDownloadCount(){
    this.api.getAllDownloadsAPI().subscribe((res:any)=>{
      this.downloadCount = res.length
    })
  }

  getAllDownloadList(){

  }

  menuClicked(){
    this.open = !this.open
  }

  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl("/")
  }

}

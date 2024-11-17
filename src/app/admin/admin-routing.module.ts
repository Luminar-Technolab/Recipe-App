import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageRecipeComponent } from './manage-recipe/manage-recipe.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { UsersComponent } from './users/users.component';
import { RequestComponent } from './request/request.component';
import { CookpediaAdminComponent } from './cookpedia-admin/cookpedia-admin.component';

const routes: Routes = [
  
  {
    path:'',title:"Dashboard",component:DashboardComponent
  },
  {
    path:'add-recipe',title:"Add Recipe",component:ManageRecipeComponent
  },
  {
    path:'recipe/:id/edit',title:"Edit Recipe",component:ManageRecipeComponent
  },
  {
    path:'download-list',title:"Download Recipe list",component:DownloadListComponent
  },
  {
    path:'recipe-list',title:"All Recipe List",component:RecipeListComponent
  },
  {
    path:'users',title:"All Users List",component:UsersComponent
  },
  {
    path:'request',title:"All Request List",component:RequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

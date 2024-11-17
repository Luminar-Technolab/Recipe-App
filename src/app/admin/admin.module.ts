import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ManageRecipeComponent } from './manage-recipe/manage-recipe.component';
import { UsersComponent } from './users/users.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { RequestComponent } from './request/request.component';
import { CookpediaAdminComponent } from './cookpedia-admin/cookpedia-admin.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [
    CookpediaAdminComponent,
    DashboardComponent,
    RecipeListComponent,
    ManageRecipeComponent,
    UsersComponent,
    DownloadListComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SearchPipe
    
  ]
})
export class AdminModule { }

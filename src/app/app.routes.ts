import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'admin', canActivate:[authGuard],
        loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:'',component:HomeComponent,title:'Home Page'
    },
    {
        path:'recipes',component:RecipesComponent,title:'All Recipes Page'
    },
    {
        path:'about',component:AboutComponent,title:'About Page'
    },
    {
        path:'contact',component:ContactComponent,title:'Contact Page'
    },
    {
        path:'login',component:LoginComponent,title:'Login Page'
    },
    {
        path:'register',component:RegisterComponent,title:'Register Page'
    },
    {
        path:':id/view-recipe',canActivate:[authGuard],component:ViewRecipeComponent,title:'View Recipe Page'
    },
    {
        path:'saved-recipes',canActivate:[authGuard],component:SavedRecipesComponent,title:'Save Recipes Page'
    }
];

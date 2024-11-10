import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-saved-recipes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './saved-recipes.component.html',
  styleUrl: './saved-recipes.component.css'
})
export class SavedRecipesComponent {

}

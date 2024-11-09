import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(allRecipes: any[], recipeType:string,recipeName:string): any[] {
    const result:any = []
    if(!allRecipes || !recipeName || !recipeType){
      return allRecipes
    }
    allRecipes.forEach((item:any)=>{
      item[recipeType].toLowerCase().includes(recipeName.toLowerCase()) && result.push(item) 
    })
    
    return result;
  }

}

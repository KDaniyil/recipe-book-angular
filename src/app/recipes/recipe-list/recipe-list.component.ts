import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test of recipe',
      'https://www.wholesomeyum.com/wp-content/uploads/2021/11/wholesomeyum-London-Broil-Recipe-In-The-Oven-21.jpg'
    ),
  ];
}

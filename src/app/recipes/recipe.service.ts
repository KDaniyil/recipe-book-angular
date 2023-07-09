import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test of recipe',
      'https://www.wholesomeyum.com/wp-content/uploads/2021/11/wholesomeyum-London-Broil-Recipe-In-The-Oven-21.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is a test of recipe',
      'https://www.wholesomeyum.com/wp-content/uploads/2021/11/wholesomeyum-London-Broil-Recipe-In-The-Oven-21.jpg',
      [new Ingredient('Buns', 1), new Ingredient('Meat', 20)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getReceipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

import { EventEmitter, Injectable } from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test recipe.',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

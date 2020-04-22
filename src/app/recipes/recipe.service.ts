import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply test', 'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg', [
          new Ingredient('Meat', 1),
          new Ingredient('Apple', 3)
        ]),
        new Recipe('Another test recipe', 'This is simply test', 'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg', [
          new Ingredient('Milk', 1),
          new Ingredient('Flour', 2)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipe(index: number) {
        return this.recipes[index];
      }

      getRecipes() {
        return this.recipes.slice();
      }
      addIngrediendsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}
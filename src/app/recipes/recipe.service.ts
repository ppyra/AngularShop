import { Recipe } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('A test recipe', 'This is simply test', 'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg', [
    //       new Ingredient('Meat', 1),
    //       new Ingredient('Apple', 3)
    //     ]),
    //     new Recipe('Another test recipe', 'This is simply test', 'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg', [
    //       new Ingredient('Milk', 1),
    //       new Ingredient('Flour', 2)
    //     ])
    //   ];
    private recipes: Recipe[]= [];

      constructor(private slService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      } 

      getRecipe(index: number) {
        return this.recipes[index];
      }

      getRecipes() {
        return this.recipes.slice();
      }
      addIngrediendsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }
      update(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }
}
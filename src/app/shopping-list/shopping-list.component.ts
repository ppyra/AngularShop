import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shopingListService.getIngredients();
    this.igChangeSub = this.shopingListService.ingredientsChange.subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
    )
  }
  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
  onEditItem(index: number){
    this.shopingListService.startedEditing.next(index);
  }
}

import { Component } from "@angular/core";
import { FoodItemComponent } from '../item-info/food-item.component';

@Component({
   selector:'app-food-menu',
   templateUrl:'./food-menu.component.html',
})

export class FoodMenuComponent{
   foodItemList:FoodItemComponent[] = [
      new FoodItemComponent(1,"Pizza",149,new Date("23 Jun 1998"),true,"Main Course",true,""),
      new FoodItemComponent(2,"Burger",99,new Date("23 Jun 1998"),true,"Main Course",true,""),
   ]
}
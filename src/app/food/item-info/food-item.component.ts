import { Component } from '@angular/core';
import { FoodItem } from './food-item';

@Component({
   selector:'app-food-item-info',
   templateUrl:'./food-item.component.html',
})

export class FoodItemComponent implements FoodItem{
   id: number = 1;
   name: string = "Pizza";
   price: number = 149;
   dateOfLaunch: Date = new Date("23 Jun 1998");
   active: boolean = true;
   category: string = "Main Course";
   freeDelivery: boolean = true;
   imageUrl: string = "";
   constructor(id: number, name: string, price: number, dateOfLaunch: Date, active: boolean, category: string, freeDelivery: boolean, imageUrl: string){
      this.id = id
      this.name = name
      this.price = price
      this.dateOfLaunch = dateOfLaunch
      this.active = active
      this.category = category
      this.freeDelivery = freeDelivery
      this.imageUrl = imageUrl
   }
}
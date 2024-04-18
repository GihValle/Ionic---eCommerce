import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";

@Injectable({
  providedIn: 'root',
})

export class FoodServices{
  getFoods(): Food[]{
    return[
      {
        id: 1,
        title: 'Tradicional',
        price: 10,
        image: 'assets/images/prato.png',
        description: 'Arroz, Feijão e Carne',
      },
      {
        id: 2,
        title: 'Tradicional',
        price: 10,
        image: 'assets/images/prato.png',
        description: 'Arroz, Feijão e Carne',
      },
      {
        id: 3,
        title: 'Tradicional',
        price: 10,
        image: 'assets/images/prato.png',
        description: 'Arroz, Feijão e Carne',
      },
      {
        id: 4,
        title: 'Tradicional',
        price: 10,
        image: 'assets/images/prato.png',
        description: 'Arroz, Feijão e Carne',
      },
      {
        id: 5,
        title: 'Tradicional',
        price: 10,
        image: 'assets/images/prato.png',
        description: 'Arroz, Feijão e Carne',
      },
      {
        id: 6,
        title: 'Tradicional',
        price: 10,
        image: 'assets/images/prato.png',
        description: 'Arroz, Feijão e Carne',
      },
    ];
  }

  //tipagem
  getFood(id:number):Food | undefined{
    return this.getFoods().find((food)=>food.id===id);
  }
}

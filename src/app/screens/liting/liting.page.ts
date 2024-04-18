import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodServices } from 'src/app/services/food.services';

@Component({
  selector: 'app-liting',
  templateUrl: './liting.page.html',
  styleUrls: ['./liting.page.scss'],
})
export class LitingPage implements OnInit{

  categories: Category[]=[];

  foods: Food[]=[];

  constructor(private foodServices: FoodServices) {
    this.categories.push(
      {
        id: 1,
        label: "All",
        image: "assets/images/icon/all.png",
        active: true,
      }
    )

    this.categories.push(
      {
        id: 2,
        label: "All",
        image: "assets/images/icon/all.png",
        active: false,
      }
    )

    this.categories.push(
      {
        id: 3,
        label: "All",
        image: "assets/images/icon/all.png",
        active: false,
      }
    )

    this.categories.push(
      {
        id: 4,
        label: "All",
        image: "assets/images/icon/all.png",
        active: false,
      }
    )
  }

  ngOnInit(){
    this.foods = this.foodServices.getFoods();
  }
}

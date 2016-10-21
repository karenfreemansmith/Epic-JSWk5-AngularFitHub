import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1><img src="build/images/logo.png" class="logo">Epic Health Tracker</h1>
      <div class="row">
        <div class="col-sm-6">
          <show-food
            [childFoodList] = "parentFoodList"
            (clickedFood) = "showFood($event)"
          ></show-food>
        </div>
        <div class="col-sm-6">
          <add-food
            [childSelectedFood] = "selectedFood"
            (addFoodSender) = "addFood($event)"
          ></add-food>
          <edit-food
            [childSelectedFood] = "selectedFood"
            (editFoodSender)="editDone()"
          ></edit-food>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public parentFoodList: Food[] = [];
  addFood(newFoodFromChild: Food) {
    this.parentFoodList.push(newFoodFromChild);
  }
  selectedFood: Food = null;
  showFood(clickedFood) {
    this.selectedFood = clickedFood;
  }
  editDone() {
    this.selectedFood = null;
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1><img src="build/images/logo.png" class="logo">Epic Health Tracker</h1>
      <show-meal
        [childMealList] = "parentMealList"
        (clickedMeal) = "showDetails($event)"
      ></show-meal>
      <add-meal
        [childSelectedMeal] = "selectedMeal"
        (newMealSender) = "addMeal($event)"
      ></add-meal>
    </div>
  `
})

export class AppComponent {
  public parentMealList: Meal[] = [];
  addMeal(newMealFromChild: Meal) {
    this.parentMealList.push(newMealFromChild);
  }
  selectedMeal: Meal = null;
  showDetails(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

}

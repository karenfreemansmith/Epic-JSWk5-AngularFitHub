import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: "show-food",
  template:`
  <div *ngFor="let currentFood of childFoodList " >
      <h4>{{ currentFood.food }} ({{ currentFood.calories }} calories) {{ currentFood.datetime | date:'longDate' }} @ {{ currentFood.datetime | date:'shortTime' }}</h4>
      <p>Protein: {{ currentFood.protein }}, Carbohydrates: {{ currentFood.carbs }}, Fat: {{ currentFood.fat }}</p>
      <p><strong>Comments: </strong> {{ currentFood.comments }}</p>
  </div>
  `
})

export class ShowFoodComponent {
  @Input() childFoodList: Food[];
  @Output() clickedFood = new EventEmitter();

  selectFood(foodToEdit: Food) {
    this.clickedFood.emit(foodToEdit);
  }
}

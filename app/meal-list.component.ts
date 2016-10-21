import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { Food } from './food.model';

@Component ({
  selector: "show-meals",
  template:`
  <div *ngFor="let currentMeal of childMealList" >
    <h4 (click)="selectMeal(currentMeal)" >{{ currentMeal.description }}</h4>
    <h5>{{ currentMeal.datetime | date:'longDate' }} @ {{ currentMeal.datetime | date:'shortTime' }}</h5>
    <p>(
      Protein: {{ currentMeal.protein | percent }},
      Carbohydrates: {{ currentMeal.carbs| percent }},
      Fat: {{ currentMeal.fat| percent }}
    )</p>
    <p *ngFor="let currentFood of currentMeal.foodlist"><strong>{{currentFood.name}}</strong> {{ currentFood.calories }}</p>
  </div>
  `
})

export class ShowMealComponent {
  @Input() childMealList: Meal[];
  @Output() clickedMeal = new EventEmitter();

  selectMeal(mealToEdit: Meal) {
    this.clickedMeal.emit(mealToEdit);
  }
}

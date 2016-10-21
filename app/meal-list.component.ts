import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: "show-meal",
  template:`
  <div *ngFor="let currentMeal of childMealList " >
      <h4>{{ currentMeal.food }} ({{ currentMeal.calories }}) @ {{ currentMeal.datetime }}</h4>
      <p>Protein: {{ currentMeal.protein }}</p>
      <p>Carbohydrates: {{ currentMeal.carbs }}</p>
      <p>Fat: {{ currentMeal.fat }}</p>
      <p>{{ currentMeal.comments }}</p>
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

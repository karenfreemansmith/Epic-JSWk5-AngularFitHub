import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: "show-food",
  template:`
  <div *ngFor="let currentFood of childFoodList " >
    <h4 (click)="selectFood(currentFood)" >
      {{ currentFood.food }}
      <span *ngIf="currentFood.problemData()" class="warning">
      ({{ currentFood.calories }} calories)</span>
      <span *ngIf="!currentFood.problemData()">
      ({{ currentFood.calories }} calories)</span>
      {{ currentFood.datetime | date:'longDate' }}
      @ {{ currentFood.datetime | date:'shortTime' }}
    </h4>
    <p>
      Protein: {{ currentFood.protein }}g,
      Carbohydrates: {{ currentFood.carbs }}g,
      Fat: {{ currentFood.fat }}g

      <span *ngIf="currentFood.problemData()" class="warning">
      (Calculated calories: {{ currentFood.calculatedCalories() }})</span>
      <span *ngIf="!currentFood.problemData()">
      (Calculated calories: {{ currentFood.calculatedCalories() }})</span>
    </p>
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

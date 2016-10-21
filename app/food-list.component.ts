import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: "show-food",
  template:`
  <div class="row">
    <div class="col-xs-6 col-xs-offset-2">
      <select (change)="onChange($event.target.value)" class="form-control">
        <option value = "All" selected="selected">Show All Food</option>
        <option value = "high calorie">High Calorie Foods</option>
        <option value = "high fat">High Fat Foods</option>
        <option value = "high carbs">High Carb Foods</option>
        <option value = "low protein">Low Protein Foods</option>
      </select>
    </div>
  </div>
  <div *ngFor="let currentFood of childFoodList | badfood: badFoodSelection " >
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
  public badFoodSelection: string = "All";
  onChange(optionFromMenu) {
    this.badFoodSelection = optionFromMenu;
  }
  selectFood(foodToEdit: Food) {
    this.clickedFood.emit(foodToEdit);
  }
}

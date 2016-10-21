import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector:"add-food",
  template:`
  <div *ngIf="childSelectedFood===null" class="row">
    <h3>Add Food:</h3>
    <div class="form-group col-xs-9">
      <label>Enter Food: </label>
      <input #newFood class="form-control">
    </div>
    <div class="form-group col-xs-3">
      <label>Enter Calories: </label>
      <input #newCalories class="form-control" type="number">
    </div>
    <div class="form-group col-xs-4">
      <label>Enter Protein (in grams): </label>
      <input #newProtein class="form-control" type="number">
    </div>
    <div class="form-group col-xs-4">
      <label>Enter Carbs (in grams): </label>
      <input #newCarbs class="form-control" type="number">
    </div>
    <div class="form-group col-xs-4">
      <label>Enter Fat (in grams): </label>
      <input #newFat class="form-control" type="number">
    </div>
    <div class="form-group col-xs-12">
      <label>Enter Comments: </label>
      <input #newComment class="form-control">
    </div>
    <div class="form-group col-xs-12">
    <button (click)="
      addClicked(newFood.value, newCalories.value, newProtein.value, newCarbs.value, newFat.value, newComment.value);
      newFood.value='';
      newCalories.value=0;
      newProtein.value=0;
      newCarbs.value=0;
      newFat.value=0;
      newComment.value='';
    " class="btn form-control">Add Food</button>
    </div>
  </div>
  `
})

export class AddFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() addFoodSender = new EventEmitter();
  addClicked(food: string, calories: number, protein: number, carbs: number, fat: number, comment: string ){
    if((food!=='')&&(calories>0)) {
      var newFoodToAdd: Food = new Food(food, calories, protein, carbs, fat, comment);
      this.addFoodSender.emit(newFoodToAdd);
    } else {
      alert("Please enter at least the food name and calories!");
    }
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector:"add-meal",
  template:`
  <!--<div *ngIf="childSelectedKeg===null">-->
    <h3>Add Meal:</h3>
    <div class="form-group">
      <label>Enter Food: </label>
      <input #newFood class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Calories: </label>
      <input #newCalories class="form-control" type="number">
    </div>
    <div class="form-group">
      <label>Enter Protein (in grams): </label>
      <input #newProtein class="form-control" type="number">
    </div>
    <div class="form-group">
      <label>Enter Carbs (in grams): </label>
      <input #newCarbs class="form-control" type="number">
    </div>
    <div class="form-group">
      <label>Enter Fat (in grams): </label>
      <input #newFat class="form-control" type="number">
    </div>
    <div class="form-group">
      <label>Enter Comments: </label>
      <input #newComment class="form-control">
    </div>
    <button (click)="
      addClicked(newFood.value, newCalories.value, newProtein.value, newCarbs.value, newFat.value, newComment.value);
      newFood.value='';
      newCalories.value=0;
      newProtein.value=0;
      newCarbs.value=0;
      newFat.value=0;
      newComment.value='';
    " class="btn form-control">Add Meal</button>
  <!--</div>-->
  `
})

export class AddMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() newMealSender = new EventEmitter();
  addClicked(food: string, calories: number, protein: number, carbs: number, fat: number, comment: string ){
    if((food!=='')&&(calories>0)) {
      var newMealToAdd: Meal = new Meal(food, calories, protein, carbs, fat, comment);
      this.newMealSender.emit(newMealToAdd);
    } else {
      alert("Please enter at least the food name and calories!");
    }
  }
}

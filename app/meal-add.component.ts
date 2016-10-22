import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: "add-meal",
  template:`
  <div *ngIf="childSelectedMeal===null" class="row">
    <h3>Add Meal:</h3>
    <div class="form-group col-xs-12">
      <label>Enter Meal Description: </label>
      <input #newMeal class="form-control">
    </div>
    <div class="form-group col-xs-12">
    <button (click)="
      addClicked(newMeal.value);
      newMeal.value='';
    " class="btn form-control">Add Meal</button>
    </div>
  </div>
  `
})

export class AddMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() addMealSender = new EventEmitter();
  addClicked(meal: string){
    if((meal!=='')) {
      var newMealToAdd: Meal = new Meal(meal);
      this.addMealSender.emit(newMealToAdd);
    } else {
      alert("Please enter a description of your meal (breakfast/lunch/dinner...)!");
    }
  }
}

import { Component } from '@angular/core';
import { Food } from './food.model';
import { Meal } from './meal.model';
import { Activity } from './activity.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1><img src="build/images/logo.png" class="logo">Epic Health Tracker</h1>
      <div class="row">
        <div class="col-xs-4">
          <button (click)="activityView()" class="btn form-control">Activity</button>
        </div>
        <div class="col-xs-4">
          <button (click)="foodView()" class="btn form-control">Food</button>
        </div>
        <div class="col-xs-4">
          <button (click)="mealView()" class="btn form-control">Meals</button>
        </div>
      </div>
      <div *ngIf="this.selectedView==='activity'" class="row">
        <div class="col-sm-7">
          <show-activity></show-activity>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <add-activity></add-activity>
          <edit-activity></edit-activity>
        </div>
      </div>
      <div *ngIf="this.selectedView==='food'" class="row">
        <div class="col-sm-7">
          <show-food
            [childFoodList] = "parentFoodList"
            (clickedFood) = "showFood($event)"
          ></show-food>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
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
      <div *ngIf="this.selectedView==='meals'" class="row">
        <div class="col-sm-7">
          <show-meals></show-meals>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <add-meal></add-meal>
          <edit-meal></edit-meal>
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
  selectedView: string = "meals";
  selectedFood: Food = null;
  showFood(clickedFood) {
    this.selectedFood = clickedFood;
  }
  editDone() {
    this.selectedFood = null;
  }
  activityView() {
    this.selectedView = "activity";
  }
  foodView() {
    this.selectedView = "food";
  }
  mealView() {
    this.selectedView = "meals";
  }

}

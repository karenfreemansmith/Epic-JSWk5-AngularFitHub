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
          <show-activity
            [childActivityList] = "parentActivityList"
            (clickedActivity) = "showActivity($event)"
          ></show-activity>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <add-activity
            [childSelectedActivity] = "selectedActivity"
            (addActivitySender) = "addActivity($event)"
          ></add-activity>
          <edit-activity
            [childSelectedActivity] = "selectedActivity"
            (editActivitySender)="activityEditDone()"
          ></edit-activity>
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
            (editFoodSender)="foodEditDone()"
          ></edit-food>
        </div>
      </div>
      <div *ngIf="this.selectedView==='meals'" class="row">
        <div class="col-sm-7">
          <show-meals
            [childMealList] = "parentMealList"
            (clickedMeal) = "showMeal($event)"
          ></show-meals>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <add-meal
            [childSelectedMeal] = "selectedMeal"
            (addMealSender) = "addMeal($event)"
          ></add-meal>
          <edit-meal
            [childSelectedMeal] = "selectedMeal"
            (editMealSender)="mealEditDone()"
          ></edit-meal>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public parentFoodList: Food[] = [];
  public parentMealList: Meal[] = [
    new Meal("Breakfast"),
    new Meal("Lunch"),
    new Meal("Supper")
  ];
  public parentActivityList: Activity[] = [];

  selectedView: string = "meals";
  selectedFood: Food = null;
  selectedMeal: Meal = null;
  selectedActivity: Activity = null;

  addFood(newFoodFromChild: Food) {
    this.parentFoodList.push(newFoodFromChild);
  }
  showFood(clickedFood) {
    this.selectedFood = clickedFood;
  }
  foodEditDone() {
    this.selectedFood = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.parentMealList.push(newMealFromChild);
  }
  showMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }
  mealEditDone() {
    this.selectedMeal = null;
  }
  addActivity(newActivityFromChild: Activity) {
    this.parentActivityList.push(newActivityFromChild);
  }
  showActivity(clickedActivity) {
  console.log(clickedActivity);
    this.selectedActivity = clickedActivity;
  }
  activityEditDone() {
    this.selectedActivity = null;
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

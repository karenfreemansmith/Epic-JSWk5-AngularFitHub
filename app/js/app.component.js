"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meal_model_1 = require('./meal.model');
var AppComponent = (function () {
    function AppComponent() {
        this.parentFoodList = [];
        this.parentMealList = [
            new meal_model_1.Meal("Breakfast"),
            new meal_model_1.Meal("Lunch"),
            new meal_model_1.Meal("Supper")
        ];
        this.parentActivityList = [];
        this.selectedView = "meals";
        this.selectedFood = null;
        this.selectedMeal = null;
        this.selectedActivity = null;
    }
    AppComponent.prototype.addFood = function (newFoodFromChild) {
        this.parentFoodList.push(newFoodFromChild);
    };
    AppComponent.prototype.showFood = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    AppComponent.prototype.foodEditDone = function () {
        this.selectedFood = null;
    };
    AppComponent.prototype.getFood = function (foodList) {
        foodList.forEach(function (food) {
            //addFood(food);
        });
        console.log(this.parentFoodList);
    };
    AppComponent.prototype.addMeal = function (newMealFromChild) {
        this.parentMealList.push(newMealFromChild);
    };
    AppComponent.prototype.showMeal = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.mealEditDone = function () {
        this.selectedMeal = null;
    };
    AppComponent.prototype.addActivity = function (newActivityFromChild) {
        this.parentActivityList.push(newActivityFromChild);
    };
    AppComponent.prototype.showActivity = function (clickedActivity) {
        console.log(clickedActivity);
        this.selectedActivity = clickedActivity;
    };
    AppComponent.prototype.activityEditDone = function () {
        this.selectedActivity = null;
    };
    AppComponent.prototype.activityView = function () {
        this.selectedView = "activity";
    };
    AppComponent.prototype.foodView = function () {
        this.selectedView = "food";
    };
    AppComponent.prototype.mealView = function () {
        this.selectedView = "meals";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <h1><img src=\"build/images/words.png\" class=\"logo\">FitHub</h1>\n      <div class=\"row\">\n        <div class=\"col-xs-4\">\n          <button (click)=\"activityView()\" class=\"btn form-control\">Activity</button>\n        </div>\n        <div class=\"col-xs-4\">\n          <button (click)=\"foodView()\" class=\"btn form-control\">Food</button>\n        </div>\n        <div class=\"col-xs-4\">\n          <button (click)=\"mealView()\" class=\"btn form-control\">Meals</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h3>Exercise</h3>\n          <show-progress></show-progress>\n        </div>\n        <div class=\"col-sm-6\">\n          <h3>Diet</h3>\n          <show-progress></show-progress>\n        </div>\n      </div>\n      <div *ngIf=\"this.selectedView==='activity'\" class=\"row\">\n        <div class=\"col-sm-7\">\n          <show-activity\n            [childActivityList] = \"parentActivityList\"\n            (clickedActivity) = \"showActivity($event)\"\n          ></show-activity>\n        </div>\n        <div class=\"col-sm-4 col-sm-offset-1\">\n          <add-activity\n            [childSelectedActivity] = \"selectedActivity\"\n            (addActivitySender) = \"addActivity($event)\"\n          ></add-activity>\n          <edit-activity\n            [childSelectedActivity] = \"selectedActivity\"\n            (editActivitySender)=\"activityEditDone()\"\n          ></edit-activity>\n        </div>\n      </div>\n      <div *ngIf=\"this.selectedView==='food'\" class=\"row\">\n        <div class=\"col-sm-7\">\n          <show-food\n            [childFoodList] = \"parentFoodList\"\n            (clickedFood) = \"showFood($event)\"\n            (foodList) = \"getFood($event)\"\n          ></show-food>\n        </div>\n        <div class=\"col-sm-4 col-sm-offset-1\">\n          <add-food\n            [childSelectedFood] = \"selectedFood\"\n            (addFoodSender) = \"addFood($event)\"\n          ></add-food>\n          <edit-food\n            [childSelectedFood] = \"selectedFood\"\n            (editFoodSender)=\"foodEditDone()\"\n          ></edit-food>\n        </div>\n      </div>\n      <div *ngIf=\"this.selectedView==='meals'\" class=\"row\">\n        <div class=\"col-sm-7\">\n          <show-meals\n            [childMealList] = \"parentMealList\"\n            (clickedMeal) = \"showMeal($event)\"\n          ></show-meals>\n        </div>\n        <div class=\"col-sm-4 col-sm-offset-1\">\n          <add-meal\n            [childSelectedMeal] = \"selectedMeal\"\n            (addMealSender) = \"addMeal($event)\"\n          ></add-meal>\n          <edit-meal\n            [childSelectedMeal] = \"selectedMeal\"\n            (editMealSender)=\"mealEditDone()\"\n          ></edit-meal>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
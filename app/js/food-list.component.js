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
var ShowFoodComponent = (function () {
    function ShowFoodComponent() {
        this.clickedFood = new core_1.EventEmitter();
        this.badFoodSelection = "All";
    }
    ShowFoodComponent.prototype.onChange = function (optionFromMenu) {
        this.badFoodSelection = optionFromMenu;
    };
    ShowFoodComponent.prototype.selectFood = function (foodToEdit) {
        this.clickedFood.emit(foodToEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ShowFoodComponent.prototype, "childFoodList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShowFoodComponent.prototype, "clickedFood", void 0);
    ShowFoodComponent = __decorate([
        core_1.Component({
            selector: "show-food",
            template: "\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-xs-offset-2\">\n      <select (change)=\"onChange($event.target.value)\" class=\"form-control\">\n        <option value = \"All\" selected=\"selected\">Show All Food</option>\n        <option value = \"high calorie\">High Calorie Foods</option>\n        <option value = \"high fat\">High Fat Foods</option>\n        <option value = \"high carbs\">High Carb Foods</option>\n        <option value = \"low protein\">Low Protein Foods</option>\n      </select>\n    </div>\n  </div>\n  <div *ngFor=\"let currentFood of childFoodList | badfood: badFoodSelection \" >\n    <h4 (click)=\"selectFood(currentFood)\" >\n      {{ currentFood.food }}\n      <span *ngIf=\"currentFood.problemData()\" class=\"warning\">\n      ({{ currentFood.calories }} calories)</span>\n      <span *ngIf=\"!currentFood.problemData()\">\n      ({{ currentFood.calories }} calories)</span>\n      {{ currentFood.datetime | date:'longDate' }}\n      @ {{ currentFood.datetime | date:'shortTime' }}\n    </h4>\n    <p>\n      Protein: {{ currentFood.protein }}g,\n      Carbohydrates: {{ currentFood.carbs }}g,\n      Fat: {{ currentFood.fat }}g\n\n      <span *ngIf=\"currentFood.problemData()\" class=\"warning\">\n      (Calculated calories: {{ currentFood.calculatedCalories() }})</span>\n      <span *ngIf=\"!currentFood.problemData()\">\n      (Calculated calories: {{ currentFood.calculatedCalories() }})</span>\n    </p>\n    <p><strong>Comments: </strong> {{ currentFood.comments }}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ShowFoodComponent);
    return ShowFoodComponent;
}());
exports.ShowFoodComponent = ShowFoodComponent;
//# sourceMappingURL=food-list.component.js.map
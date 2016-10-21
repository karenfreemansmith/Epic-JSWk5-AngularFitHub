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
    }
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
            template: "\n  <div *ngFor=\"let currentFood of childFoodList \" >\n      <h4>{{ currentFood.food }} ({{ currentFood.calories }} calories) {{ currentFood.datetime | date:'longDate' }} @ {{ currentFood.datetime | date:'shortTime' }}</h4>\n      <p>Protein: {{ currentFood.protein }}, Carbohydrates: {{ currentFood.carbs }}, Fat: {{ currentFood.fat }}</p>\n      <p><strong>Comments: </strong> {{ currentFood.comments }}</p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ShowFoodComponent);
    return ShowFoodComponent;
}());
exports.ShowFoodComponent = ShowFoodComponent;
//# sourceMappingURL=food-list.component.js.map
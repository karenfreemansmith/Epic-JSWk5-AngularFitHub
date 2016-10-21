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
var core_1 = require("@angular/core");
var meal_model_1 = require("./meal.model");
var AddMealComponent = (function () {
    function AddMealComponent() {
        this.newMealSender = new core_1.EventEmitter();
    }
    AddMealComponent.prototype.addClicked = function (food, calories, protein, carbs, fat, comment) {
        if ((food !== '') && (calories > 0)) {
            var newMealToAdd = new meal_model_1.Meal(food, calories, protein, carbs, fat, comment);
            this.newMealSender.emit(newMealToAdd);
        }
        else {
            alert("Please enter at least the food name and calories!");
        }
    };
    return AddMealComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", meal_model_1.Meal)
], AddMealComponent.prototype, "childSelectedMeal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddMealComponent.prototype, "newMealSender", void 0);
AddMealComponent = __decorate([
    core_1.Component({
        selector: "add-meal",
        template: "\n  <!--<div *ngIf=\"childSelectedKeg===null\">-->\n    <h3>Add Meal:</h3>\n    <div class=\"form-group\">\n      <label>Enter Food: </label>\n      <input #newFood class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Calories: </label>\n      <input #newCalories class=\"form-control\" type=\"number\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Protein (in grams): </label>\n      <input #newProtein class=\"form-control\" type=\"number\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Carbs (in grams): </label>\n      <input #newCarbs class=\"form-control\" type=\"number\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Fat (in grams): </label>\n      <input #newFat class=\"form-control\" type=\"number\">\n    </div>\n    <div class=\"form-group\">\n      <label>Enter Comments: </label>\n      <input #newComment class=\"form-control\">\n    </div>\n    <button (click)=\"\n      addClicked(newFood.value, newCalories.value, newProtein.value, newCarbs.value, newFat.value, newComment.value);\n      newFood.value='';\n      newCalories.value=0;\n      newProtein.value=0;\n      newCarbs.value=0;\n      newFat.value=0;\n      newComment.value='';\n    \" class=\"btn form-control\">Add Meal</button>\n  <!--</div>-->\n  "
    }),
    __metadata("design:paramtypes", [])
], AddMealComponent);
exports.AddMealComponent = AddMealComponent;
//# sourceMappingURL=meal-add.component.js.map
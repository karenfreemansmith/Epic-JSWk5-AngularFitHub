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
var AddMealComponent = (function () {
    function AddMealComponent() {
        this.addMealSender = new core_1.EventEmitter();
    }
    AddMealComponent.prototype.addClicked = function (meal) {
        if ((meal !== '')) {
            var newMealToAdd = new meal_model_1.Meal(meal);
            this.addMealSender.emit(newMealToAdd);
        }
        else {
            alert("Please enter a description of your meal (breakfast/lunch/dinner...)!");
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', meal_model_1.Meal)
    ], AddMealComponent.prototype, "childSelectedMeal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddMealComponent.prototype, "addMealSender", void 0);
    AddMealComponent = __decorate([
        core_1.Component({
            selector: "add-meal",
            template: "\n  <div *ngIf=\"childSelectedMeal===null\" class=\"row\">\n    <h3>Add Meal:</h3>\n    <div class=\"form-group col-xs-12\">\n      <label>Enter Meal Description: </label>\n      <input #newMeal class=\"form-control\">\n    </div>\n    <div class=\"form-group col-xs-12\">\n    <button (click)=\"\n      addClicked(newMeal.value);\n      newMeal.value='';\n    \" class=\"btn form-control\">Add Meal</button>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AddMealComponent);
    return AddMealComponent;
}());
exports.AddMealComponent = AddMealComponent;
//# sourceMappingURL=meal-add.component.js.map
"use strict";
var Food = (function () {
    function Food(food, calories, protein, fat, carbs) {
        this.food = food;
        this.calories = calories;
        this.protein = protein;
        this.fat = fat;
        this.carbs = carbs;
        this.datetime = new Date();
    }
    Food.prototype.calculatedCalories = function () {
        return this.protein * 4 + this.carbs * 4 + this.fat * 9;
    };
    Food.prototype.highCal = function () {
        console.log(this.calories);
        return this.calories > 500;
    };
    Food.prototype.highFat = function () {
        console.log(this.fat * 9 / this.calories);
        if (this.fat * 9 / this.calories > .03) {
            return true;
        }
        else {
            return false;
        }
    };
    Food.prototype.highCarb = function () {
        console.log(this.carbs * 4 / this.calories);
        if (this.carbs * 4 / this.calories > .07) {
            return true;
        }
        else {
            return false;
        }
    };
    Food.prototype.lowProtein = function () {
        console.log(this.protein * 4 / this.calories);
        if (this.protein * 4 / this.calories < .01) {
            return true;
        }
        else {
            return false;
        }
    };
    Food.prototype.problemData = function () {
        if (this.calculatedCalories() > this.calories + 10 || this.calculatedCalories() <= this.calories - 10) {
            return true;
        }
        else {
            return false;
        }
    };
    return Food;
}());
exports.Food = Food;
//# sourceMappingURL=food.model.js.map
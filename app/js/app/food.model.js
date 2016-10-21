"use strict";
var Food = (function () {
    function Food(food, calories, protein, carbs, fat, comments) {
        this.food = food;
        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
        this.comments = comments;
        this.datetime = new Date();
    }
    Food.prototype.calculatedCalories = function () {
        return this.protein * 4 + this.carbs * 4 + this.fat * 9;
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
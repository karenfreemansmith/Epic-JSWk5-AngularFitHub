"use strict";
var Meal = (function () {
    function Meal(food, calories, protein, carbs, fat, comments) {
        this.food = food;
        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
        this.comments = comments;
        this.datetime = new Date();
    }
    return Meal;
}());
exports.Meal = Meal;
//# sourceMappingURL=meal.model.js.map
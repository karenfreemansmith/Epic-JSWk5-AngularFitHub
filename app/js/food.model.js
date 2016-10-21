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
    return Food;
}());
exports.Food = Food;
//# sourceMappingURL=food.model.js.map
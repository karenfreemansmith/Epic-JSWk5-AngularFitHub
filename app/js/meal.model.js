"use strict";
var Meal = (function () {
    function Meal(description) {
        this.description = description;
        this.datetime = new Date();
        this.foodlist = [];
    }
    return Meal;
}());
exports.Meal = Meal;
//# sourceMappingURL=meal.model.js.map
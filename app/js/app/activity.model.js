"use strict";
var Activity = (function () {
    function Activity(description, duration) {
        this.description = description;
        this.duration = duration;
        this.datetime = new Date();
    }
    return Activity;
}());
exports.Activity = Activity;
//# sourceMappingURL=activity.model.js.map
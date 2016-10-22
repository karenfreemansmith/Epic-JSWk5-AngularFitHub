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
var activity_model_1 = require("./activity.model");
var AddActivityComponent = (function () {
    function AddActivityComponent() {
        this.addActivitySender = new core_1.EventEmitter();
    }
    AddActivityComponent.prototype.addClicked = function (activity, duration) {
        if ((activity !== '') && (duration <= 0)) {
            var newActivityToAdd = new activity_model_1.Activity(activity, duration);
            this.addActivitySender.emit(newActivityToAdd);
        }
        else {
            alert("Be sure to enter a description of your activity and the number of minutes you did it!");
        }
    };
    return AddActivityComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", activity_model_1.Activity)
], AddActivityComponent.prototype, "childSelectedActivity", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddActivityComponent.prototype, "addActivitySender", void 0);
AddActivityComponent = __decorate([
    core_1.Component({
        selector: "add-activity",
        template: "\n  <div *ngIf=\"childSelectedActivity===null\" class=\"row\">\n    <h3>Add Activity:</h3>\n    <div class=\"form-group col-xs-12\">\n      <label>Enter Activity Description: </label>\n      <input #newActivity class=\"form-control\">\n    </div>\n    <div class=\"form-group col-xs-12\">\n    <button (click)=\"addClicked(newActivity.value)\" class=\"btn form-control\">Add Activity</button>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AddActivityComponent);
exports.AddActivityComponent = AddActivityComponent;
//# sourceMappingURL=activity-add.component.js.map
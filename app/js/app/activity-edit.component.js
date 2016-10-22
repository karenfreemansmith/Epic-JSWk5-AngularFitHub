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
var EditActivityComponent = (function () {
    function EditActivityComponent() {
        this.editActivitySender = new core_1.EventEmitter();
    }
    EditActivityComponent.prototype.updateClicked = function () {
        this.editActivitySender.emit();
    };
    return EditActivityComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", activity_model_1.Activity)
], EditActivityComponent.prototype, "childSelectedActivity", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditActivityComponent.prototype, "editActivitySender", void 0);
EditActivityComponent = __decorate([
    core_1.Component({
        selector: "edit-activity",
        template: "\n  <div *ngIf=\"childSelectedActivity\" class=\"row\">\n    <h3>Editing: {{childSelectedActivity.description}}</h3>\n    <h4>{{childSelectedActivity.datetime | date}}:</h4>\n    <div class=\"form-group col-xs-12\">\n      <label>Activity Description: </label>\n      <input [(ngModel)]=\"childSelectedActivity.description\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group col-xs-12\">\n    <button (click)=\"updateClicked()\" class=\"btn form-control\">Done Editing</button>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], EditActivityComponent);
exports.EditActivityComponent = EditActivityComponent;
//# sourceMappingURL=activity-edit.component.js.map
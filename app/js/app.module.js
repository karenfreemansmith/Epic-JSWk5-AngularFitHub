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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var food_add_component_1 = require('./food-add.component');
var food_edit_component_1 = require('./food-edit.component');
var food_list_component_1 = require('./food-list.component');
var meal_add_component_1 = require('./meal-add.component');
var meal_edit_component_1 = require('./meal-edit.component');
var meal_list_component_1 = require('./meal-list.component');
var activity_add_component_1 = require('./activity-add.component');
var activity_edit_component_1 = require('./activity-edit.component');
var activity_list_component_1 = require('./activity-list.component');
var show_progress_component_1 = require('./show-progress.component');
var badfood_pipe_1 = require('./badfood.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                food_add_component_1.AddFoodComponent,
                food_edit_component_1.EditFoodComponent,
                food_list_component_1.ShowFoodComponent,
                meal_add_component_1.AddMealComponent,
                meal_edit_component_1.EditMealComponent,
                meal_list_component_1.ShowMealComponent,
                activity_add_component_1.AddActivityComponent,
                activity_edit_component_1.EditActivityComponent,
                activity_list_component_1.ShowActivityComponent,
                show_progress_component_1.ShowProgressComponent,
                badfood_pipe_1.BadFoodPipe
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
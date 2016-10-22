import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: "edit-meal",
  template:`
  <div *ngIf="childSelectedMeal" class="row">
    <h3>Editing: {{childSelectedMeal.description}}</h3>
    <h4>{{childSelectedMeal.datetime | date}}:</h4>
    <div class="form-group col-xs-12">
      <label>Meal Description: </label>
      <input [(ngModel)]="childSelectedMeal.description" class="form-control">
    </div>
    <div class="form-group col-xs-12">
      <label>Meal Date/Time: </label>
      <input [(ngModel)]="childSelectedMeal.datetime" class="form-control">
    </div>
    <div class="form-group col-xs-12">
    <button (click)="updateClicked()" class="btn form-control">Done Editing</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() editMealSender = new EventEmitter();
  updateClicked() {
    this.editMealSender.emit();
  }
}

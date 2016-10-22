import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from './activity.model';

@Component ({
  selector: "edit-activity",
  template:`
  <div *ngIf="childSelectedActivity" class="row">
    <h3>Editing: {{childSelectedActivity.description}}</h3>
    <h4>{{childSelectedActivity.datetime | date}}:</h4>
    <div class="form-group col-xs-8">
      <label>Activity Description: </label>
      <input [(ngModel)]="childSelectedActivity.description" class="form-control">
    </div>
    <div class="form-group col-xs-4">
      <label>How many minutes?: </label>
      <input [(ngModel)]="childSelectedActivity.duration" class="form-control" type="number">
    </div>
    <div class="form-group col-xs-12">
      <label>Activity Date/Time: </label>
      <input [(ngModel)]="childSelectedActivity.datetime" class="form-control">
    </div>
    <div class="form-group col-xs-12">
    <button (click)="updateClicked()" class="btn form-control">Done Editing</button>
    </div>
  </div>
  `
})

export class EditActivityComponent {
  @Input() childSelectedActivity: Activity;
  @Output() editActivitySender = new EventEmitter();
  updateClicked() {
    this.editActivitySender.emit();
  }
}

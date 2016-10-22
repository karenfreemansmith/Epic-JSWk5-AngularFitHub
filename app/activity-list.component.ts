import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from './activity.model';

@Component ({
  selector: "show-activity",
  template:`
  <div *ngFor="let currentActivity of childActivityList">
    <h3  (click)="selectedActivity(currentActivity)">{{ currentActivity.duration }} minutes of {{ currentActivity.description }}</h3>
    <p>{{currentActivity.datetime | date:'longDate'}}</p>
  </div>
  `
})

export class ShowActivityComponent {
  @Input() childActivityList: Activity[];
  @Output() clickedActivity = new EventEmitter();

  selectedActivity(activityToEdit: Activity) {
  console.log(activityToEdit);
    this.clickedActivity.emit(activityToEdit);
  }
}

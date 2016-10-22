import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from './activity.model';

@Component ({
  selector: "show-activity",
  template:`
  <div *ngFor="let currentActivity of childActivityList" >
    <h4 (click)="selectActivity(currentActivity)" >{{ currentActivity.duration }} minutes of {{ currentActivity.description }}</h4>
    <p><strong>{{currentActivity.datetime}}</strong></p>
  </div>
  `
})

export class ShowActivityComponent {
  @Input() childActivityList: Activity[];
  @Output() clickedActivity = new EventEmitter();

  selectActivity(activityToEdit: Activity) {
    this.clickedActivity.emit(activityToEdit);
  }
}

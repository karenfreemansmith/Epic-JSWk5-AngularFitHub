import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AddFoodComponent }  from './food-add.component';
import { EditFoodComponent } from './food-edit.component';
import { ShowFoodComponent } from './food-list.component';
import { AddMealComponent }  from './meal-add.component';
import { EditMealComponent } from './meal-edit.component';
import { ShowMealComponent } from './meal-list.component';
import { AddActivityComponent }  from './activity-add.component';
import { EditActivityComponent } from './activity-edit.component';
import { ShowActivityComponent } from './activity-list.component';
import { BadFoodPipe } from './badfood.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AddFoodComponent,
    EditFoodComponent,
    ShowFoodComponent,
    AddMealComponent,
    EditMealComponent,
    ShowMealComponent,
    AddActivityComponent,
    EditActivityComponent,
    ShowActivityComponent,
    BadFoodPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

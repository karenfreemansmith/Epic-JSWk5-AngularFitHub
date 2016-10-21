import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AddFoodComponent }  from './food-add.component';
import { EditFoodComponent } from './food-edit.component';
import { ShowFoodComponent } from './food-list.component';
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
    BadFoodPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

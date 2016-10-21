import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AddFoodComponent }  from './food-add.component';
import { EditFoodComponent } from './food-edit.component';
import { ShowFoodComponent } from './food-list.component';

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
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

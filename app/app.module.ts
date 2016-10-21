import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AddMealComponent }  from './meal-add.component';
import { ShowMealComponent } from './meal-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AddMealComponent,
    ShowMealComponent,
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

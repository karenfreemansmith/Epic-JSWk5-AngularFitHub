import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "badfood",
  pure: false
})

export class BadFoodPipe implements PipeTransform {
  transform (input: Food[], badFood){
    var output: Food[] = [];
    if (badFood === "high calorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].highCal()) {
          output.push(input[i]);
        }
      }
      return output
    } else if (badFood === "high fat") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].highFat()) {
          output.push(input[i]);
        }
      }
      return output
    } else if (badFood === "high carbs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].highCarb()) {
          output.push(input[i]);
        }
      }
      return output
    } else if (badFood === "low protein") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].lowProtein()) {
          output.push(input[i]);
        }
      }
      return output
    } else {
      return input;
    }
  }
}

import { Food } from './food.model';

export class Meal {
  public datetime: number = new Date();
  public foodlist: Food[] = [];
  public calories: number;
  public protein: number;
  public fat: number;
  public carbs: number;
  public totalCalories: number;
  public totalProtein: number;
  public totalCarbs: number;
  public totalFat: number;

  constructor(public description: string) { }
/*
  totalCalories() {
    this.totalCalories=0;
    this.foodlist.forEach(function(food) {
      this.totalCalories+=food.calories;
    });
  }

  totalCarbs() {
    this.totalCalories=0;
    this.foodlist.forEach(function(food) {
      this.totalCalories+=food.calories;
    });
    this.carbs=totalCalories/totalCarbs;
  }

  totalProtein() {
    this.totalCalories=0;
    this.foodlist.forEach(function(food) {
      this.totalCalories+=food.calories;
    });
  }

  totalFat() {
    this.totalCalories=0;
    this.foodlist.forEach(function(food) {
      this.totalCalories+=food.calories;
    });
  }

  highCal() {
    return this.calories > 500;
  }

  highFat() {
    if (this.fat > .03) {
      return true;
    } else {
      return false;
    }
  }

  highCarb() {
    if (this.carbs > .07) {
      return true;
    } else {
      return false;
    }
  }

  lowProtein() {
    if (this.protein < .01) {
      return true;
    } else {
      return false;
    }
  }
  */
}

export class Food {
  public datetime: Date = new Date();
  constructor(public food: string,
              public calories: number,
              public protein: number,
              public carbs: number,
              public fat: number,
              public comments: string) { }

  calculatedCalories() {
    return this.protein*4 + this.carbs*4 + this.fat*9;
  }

  highCal() {
    console.log(this.calories);
    return this.calories > 500;
  }

  highFat() {
    console.log(this.fat*9/this.calories);
    if (this.fat*9/this.calories > .03) {
      return true;
    } else {
      return false;
    }
  }

  highCarb() {
    console.log(this.carbs*4/this.calories);
    if (this.carbs*4/this.calories > .07) {
      return true;
    } else {
      return false;
    }
  }

  lowProtein() {
    console.log(this.protein*4/this.calories);
    if (this.protein*4/this.calories < .01) {
      return true;
    } else {
      return false;
    }
  }

  problemData() {
    if(this.calculatedCalories() > this.calories + 10 || this.calculatedCalories() <= this.calories - 10) {
      return true;
    } else {
      return false;
    }
  }
}

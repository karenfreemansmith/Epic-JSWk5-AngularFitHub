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

  problemData() {
    if(this.calculatedCalories() > this.calories + 10 || this.calculatedCalories() <= this.calories - 10) {
      return true;
    } else {
      return false;
    }
  }
}

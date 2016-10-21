export class Meal {
  public datetime: Date = new Date();
  constructor(public food: string,
              public calories: number,
              public protein: number,
              public carbs: number,
              public fat: number,
              public comments: string) { }
}

export class Activity {
  public datetime: Date = new Date();
  constructor(public description: string,
              public duration: number) { }
}

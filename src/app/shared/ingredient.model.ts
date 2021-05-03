// Defining array -  {{ Ingredient }}, for use across the board.

export class Ingredient {
//  public name: string;
//  public amount: number;

  constructor(public name: string, public amount: number) {
//    this.name = name;
//    this.amount = amount;
  }
}
// Shortcut for creating; using 'public' descriptor in constructor function allows for simplified creation.

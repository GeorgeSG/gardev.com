import { Token } from './cell-state';

export class Player {
  public static readonly HUMAN = new Player('x');
  public static readonly AI = new Player('o');

  constructor(public token: Token) {}
}

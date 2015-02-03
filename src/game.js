import {Router} from 'aurelia-router';

export class Game{
  static inject() { return [Router]; }
  constructor(router){
    this.parentRouter = router.parent;
    this.antidotes = [{color: 'red'}, {color: 'yellow'}, {color: 'green'}, {color: 'blue'}];
    this.cells = ['red', 'red', 'green', 'blue'];
  }
}

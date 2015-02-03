import {Router} from 'aurelia-router';

export class Dashboard{
  static inject() { return [Router]; }
  constructor(router){
    this.parentRouter = router.parent;
  }
}

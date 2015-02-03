import {Router} from 'aurelia-router';

export class App{
  static inject() { return [Router]; }
  constructor(router){

    this.router = router;

    this.router.configure(config => {
      config.title = 'TestDisease!';
      config.map([
        {route: ['','dashboard'], moduleId: 'dashboard', nav: true, title: 'Home'},
        {route: ['game'], moduleId: 'game', nav: true, title: 'Game'}
        ]);
    });

    this.gameTitle = 'Disease!';
    this.framework = 'Aurelia';
  }
}

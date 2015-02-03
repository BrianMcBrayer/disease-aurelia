import {Behavior} from 'aurelia-framework';

export class Cell {
  static metadata() {
    return Behavior
      .customElement('cell')
      .withProperty('color')
      .withProperty('x')
      .withProperty('y')
      .withProperty('cellType');
  }

  static inject() { return [Element]; }
  constructor(element) {
    this.element = element;
    this.y = 'test';
  }

  cellTypeChanged(newValue, oldValue) {
    var child = this.element.querySelector('.cell');

    if (child) {
      if (oldValue) {
        child.classList.remove(oldValue);
      }

      if (newValue) {
        child.classList.add(newValue);
      }
    }
  }

  colorChanged(newValue, oldValue) {
    var child = this.element.querySelector('.cell');

    if (child) {
      if (oldValue) {
        child.classList.remove(oldValue);
      }

      if (newValue) {
        child.classList.add(newValue);
      }
    }
  }
}

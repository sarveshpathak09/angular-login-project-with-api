import { Component } from '@angular/core';

@Component({
  selector: 'app-polymorphism-one',
  templateUrl: './polymorphism-one.component.html',
  styleUrls: ['./polymorphism-one.component.css']
})
export class PolymorphismOneComponent {

  public polymorphismOne: string = '';

  constructor() {

    this.showMessage();
  }


  showMessage() {
    this.polymorphismOne = 'Polymorphism one Component works!';
  }
}

import { Component, OnInit } from '@angular/core';
import { PolymorphismOneComponent } from '../polymorphism-one/polymorphism-one.component';

@Component({
  selector: 'app-polymorphism-two',
  templateUrl: './polymorphism-two.component.html',
  styleUrls: ['./polymorphism-two.component.css']
})
export class PolymorphismTwoComponent extends PolymorphismOneComponent implements OnInit {

  public polymorphismTwo: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.showMessage();
  }

  // override showMessage() {
  //   this.polymorphismTwo = 'Polymorphism two Component works!';
  // }

}

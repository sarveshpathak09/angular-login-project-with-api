import { Component } from '@angular/core';

@Component({
  selector: 'app-inheritance-parent',
  templateUrl: './inheritance-parent.component.html',
  styleUrls: ['./inheritance-parent.component.css']
})
export class InheritanceParentComponent {

  public name: string = '';

  constructor() {
    this.greet();
  }

  greet() {
    this.name = 'Parent Inheritance Component works!';
  }


}

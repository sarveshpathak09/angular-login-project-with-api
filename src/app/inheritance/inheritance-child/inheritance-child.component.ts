import { Component, OnInit } from '@angular/core';
import { InheritanceParentComponent } from '../inheritance-parent/inheritance-parent.component';

@Component({
  selector: 'app-inheritance-child',
  templateUrl: './inheritance-child.component.html',
  styleUrls: ['./inheritance-child.component.css']
})
export class InheritanceChildComponent extends InheritanceParentComponent implements OnInit {

  public childName: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.showMessage();
  }

  showMessage() {
    this.childName = 'Child Inheritance Component works!';
  }

  // when we override the greet() function in the child component, the greet() function in the parent component will be overridden.
  // override greet() {
  //   this.name = 'Override Greet Function In Parent Inheritance Component works!';
  // }
}

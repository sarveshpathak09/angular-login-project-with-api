import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceParentComponent } from './inheritance-parent.component';

describe('InheritanceParentComponent', () => {
  let component: InheritanceParentComponent;
  let fixture: ComponentFixture<InheritanceParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InheritanceParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

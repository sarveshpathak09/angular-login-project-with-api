import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceChildComponent } from './inheritance-child.component';

describe('InheritanceChildComponent', () => {
  let component: InheritanceChildComponent;
  let fixture: ComponentFixture<InheritanceChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InheritanceChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

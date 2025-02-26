import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismTwoComponent } from './polymorphism-two.component';

describe('PolymorphismTwoComponent', () => {
  let component: PolymorphismTwoComponent;
  let fixture: ComponentFixture<PolymorphismTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolymorphismTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

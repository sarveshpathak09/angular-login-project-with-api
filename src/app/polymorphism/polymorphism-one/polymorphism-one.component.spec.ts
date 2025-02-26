import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismOneComponent } from './polymorphism-one.component';

describe('PolymorphismOneComponent', () => {
  let component: PolymorphismOneComponent;
  let fixture: ComponentFixture<PolymorphismOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolymorphismOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

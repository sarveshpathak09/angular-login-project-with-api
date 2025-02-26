import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewusersComponent } from './add-edit-viewusers.component';

describe('AddEditViewusersComponent', () => {
  let component: AddEditViewusersComponent;
  let fixture: ComponentFixture<AddEditViewusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditViewusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditViewusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

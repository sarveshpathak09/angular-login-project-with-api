import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewCategoryComponent } from './add-edit-view-category.component';

describe('AddEditViewCategoryComponent', () => {
  let component: AddEditViewCategoryComponent;
  let fixture: ComponentFixture<AddEditViewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditViewCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditViewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

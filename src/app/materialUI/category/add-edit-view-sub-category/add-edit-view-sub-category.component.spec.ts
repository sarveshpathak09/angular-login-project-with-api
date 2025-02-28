import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewSubCategoryComponent } from './add-edit-view-sub-category.component';

describe('AddEditViewSubCategoryComponent', () => {
  let component: AddEditViewSubCategoryComponent;
  let fixture: ComponentFixture<AddEditViewSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditViewSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditViewSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

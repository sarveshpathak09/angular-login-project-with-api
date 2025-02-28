import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditViewSubCategoryComponent } from '../add-edit-view-sub-category/add-edit-view-sub-category.component';
import { SubCategoryComponent } from './sub-category.component';

const routes: Routes = [
  // Sub Category
  { path: 'sub-category', component: SubCategoryComponent },
  { path: 'add-sub-category', component: AddEditViewSubCategoryComponent },
  { path: 'edit-sub-category', component: AddEditViewSubCategoryComponent },
  { path: 'view-sub-category', component: AddEditViewSubCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoryRoutingModule { }

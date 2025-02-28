import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditViewCategoryComponent } from '../add-edit-view-category/add-edit-view-category.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  // Category
  { path: 'category', component: CategoryComponent },
  { path: 'add-category', component: AddEditViewCategoryComponent },
  { path: 'edit-category', component: AddEditViewCategoryComponent },
  { path: 'view-category', component: AddEditViewCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }

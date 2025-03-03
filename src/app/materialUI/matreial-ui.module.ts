import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatreialUIRoutingModule } from './matreial-ui-routing.module';
import { UserComponent } from './user/user/user.component';
import { AddEditViewUserComponent } from './user/add-edit-view-user/add-edit-view-user.component';
import { CategoryComponent } from './category/category/category.component';
import { AddEditViewCategoryComponent } from './category/add-edit-view-category/add-edit-view-category.component';
import { AddEditViewSubCategoryComponent } from './category/add-edit-view-sub-category/add-edit-view-sub-category.component';
import { SubCategoryComponent } from './category/sub-category/sub-category.component';
import { UserModule } from './user/user/user.module';
import { CategoryModule } from './category/category/category.module';
import { SubCategoryModule } from './category/sub-category/sub-category.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    AddEditViewUserComponent,
    CategoryComponent,
    AddEditViewCategoryComponent,
    SubCategoryComponent,
    AddEditViewSubCategoryComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
    CategoryModule,
    SubCategoryModule,
    MatreialUIRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule

  ]
})
export class MatreialUIModule { }

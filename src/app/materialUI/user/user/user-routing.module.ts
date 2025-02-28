import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditViewUserComponent } from '../add-edit-view-user/add-edit-view-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  // User
  { path: 'user', component: UserComponent },
  { path: 'add-user', component: AddEditViewUserComponent },
  { path: 'edit-user/:id', component: AddEditViewUserComponent },
  { path: 'view-user/:id', component: AddEditViewUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './components/management/management.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InheritanceParentComponent } from './inheritance/inheritance-parent/inheritance-parent.component';
import { InheritanceChildComponent } from './inheritance/inheritance-child/inheritance-child.component';
import { PolymorphismOneComponent } from './polymorphism/polymorphism-one/polymorphism-one.component';
import { PolymorphismTwoComponent } from './polymorphism/polymorphism-two/polymorphism-two.component';
import { AbstractionComponent } from './abstraction/abstraction/abstraction.component';
import { UsersComponent } from './formGroup/users/users.component';
import { AddEditViewusersComponent } from './formGroup/add-edit-viewusers/add-edit-viewusers.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // login
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },

  { path: 'home-page', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'management', component: ManagementComponent, canActivate: [AuthGuard] },

  // Inheritance
  { path: 'parent-inheritance', component: InheritanceParentComponent, canActivate: [AuthGuard] },
  { path: 'child-inheritance', component: InheritanceChildComponent, canActivate: [AuthGuard] },

  // Polymorphism
  { path: 'polymorphism-one', component: PolymorphismOneComponent, canActivate: [AuthGuard] },
  { path: 'polymorphism-two', component: PolymorphismTwoComponent, canActivate: [AuthGuard] },

  // Abstraction
  { path: 'abstraction', component: AbstractionComponent, canActivate: [AuthGuard] },

  // Form Group
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'add-users', component: AddEditViewusersComponent, canActivate: [AuthGuard] },
  { path: 'edit-users/:id', component: AddEditViewusersComponent, canActivate: [AuthGuard] },
  { path: 'view-users/:id', component: AddEditViewusersComponent, canActivate: [AuthGuard] },

  // Lazy Loading Module - Load module only when user navigate to this route
  { path: '', loadChildren: () => import('./materialUI/matreial-ui.module').then(m => m.MatreialUIModule) },

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

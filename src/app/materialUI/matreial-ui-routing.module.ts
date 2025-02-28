
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomePageComponent } from '../components/home-page/home-page.component';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
  { path: 'category', loadChildren: () => import('./category/category/category.module').then(m => m.CategoryModule), canActivate: [AuthGuard] },
  { path: 'sub-category', loadChildren: () => import('./category/sub-category/sub-category.module').then(m => m.SubCategoryModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'user', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatreialUIRoutingModule { }

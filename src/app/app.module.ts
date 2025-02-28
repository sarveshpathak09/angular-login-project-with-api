import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagementComponent } from './components/management/management.component';
import { InheritanceParentComponent } from './inheritance/inheritance-parent/inheritance-parent.component';
import { InheritanceChildComponent } from './inheritance/inheritance-child/inheritance-child.component';
import { PolymorphismOneComponent } from './polymorphism/polymorphism-one/polymorphism-one.component';
import { PolymorphismTwoComponent } from './polymorphism/polymorphism-two/polymorphism-two.component';
import { AbstractionComponent } from './abstraction/abstraction/abstraction.component';
import { UsersComponent } from './formGroup/users/users.component';
import { AddEditViewusersComponent } from './formGroup/add-edit-viewusers/add-edit-viewusers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MatreialUIModule } from './materialUI/matreial-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManagementComponent,
    InheritanceParentComponent,
    InheritanceChildComponent,
    PolymorphismOneComponent,
    PolymorphismTwoComponent,
    AbstractionComponent,
    UsersComponent,
    AddEditViewusersComponent,
    LoginComponent,
    LogoutComponent,
    HomePageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, // ✅ Add HttpClientModule to imports
    MatreialUIModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

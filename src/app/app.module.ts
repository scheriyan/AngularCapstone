import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCoursesComponent } from './create-courses/create-courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCoursesComponent } from './update-courses/update-courses.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { RedirectComponentComponent } from './redirect-component/redirect-component.component';
import { LoginListComponent } from './login-list/login-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCoursesComponent,
    CoursesDetailsComponent,
    CoursesListComponent,
    UpdateCoursesComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    RedirectComponentComponent,
    LoginListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

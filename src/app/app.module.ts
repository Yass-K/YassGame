import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/user/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsComponent } from './components/details/details.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { GameAddComponent } from './components/user/game-add/game-add.component';
import { GameUpdateComponent } from './components/user/game-update/game-update.component';
import { ConfidentialiteComponent } from './components/confidentialite/confidentialite.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { RegistrationRequestComponent } from './components/registration-request/registration-request.component';
import { UsersInfosComponent } from './components/admin/users-infos/users-infos.component';
import { AdminUpdateUserComponent } from './components/admin/admin-update-user/admin-update-user.component';
import { CguComponent } from './components/cgu/cgu.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';
import { CgvComponent } from './components/cgv/cgv.component';
import { GamesListComponent } from './components/admin/games-list/games-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    DetailsComponent,
    UserProfileComponent,
    AdminProfileComponent,
    GameAddComponent,
    GameUpdateComponent,
    ConfidentialiteComponent,
    RegisterComponent,
    UserUpdateComponent,
    RegistrationRequestComponent,
    UsersInfosComponent,
    AdminUpdateUserComponent,
    CguComponent,
    MentionsLegalesComponent,
    CgvComponent,
    GamesListComponent,
    PageNotFoundComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      NgxSliderModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

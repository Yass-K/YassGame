import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DetailsComponent} from './components/details/details.component';
import {ContactComponent} from './components/contact/contact.component';
import {LoginComponent} from './components/user/login/login.component';
import {UserProfileComponent} from './components/user/user-profile/user-profile.component';
import {AdminProfileComponent} from './components/admin/admin-profile/admin-profile.component';
import {ConfidentialiteComponent} from './components/confidentialite/confidentialite.component';
import {GameAddComponent} from './components/user/game-add/game-add.component';
import {GameUpdateComponent} from './components/user/game-update/game-update.component';
import {RegisterComponent} from './components/admin/register/register.component';
import {UserUpdateComponent} from './components/user/user-update/user-update.component';
import {RegistrationRequestComponent} from './components/registration-request/registration-request.component';
import {UsersInfosComponent} from './components/admin/users-infos/users-infos.component';
import {AdminUpdateUserComponent} from './components/admin/admin-update-user/admin-update-user.component';
import {CguComponent} from './components/cgu/cgu.component';
import {MentionsLegalesComponent} from './components/mentions-legales/mentions-legales.component';
import {CgvComponent} from './components/cgv/cgv.component';
import {GamesListComponent} from './components/admin/games-list/games-list.component';
import {UserGuard} from './guards/user.guard';
import {AdminGuard} from './guards/admin.guard';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'details/:id', component: DetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'register-request', component: RegistrationRequestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'confidentialite', component: ConfidentialiteComponent},
  {path: 'cgu', component: CguComponent},
  {path: 'cgv', component: CgvComponent},
  {path: 'mentions-legales', component: MentionsLegalesComponent},

  // User path
  {path: 'add-game', canActivate: [UserGuard], component: GameAddComponent},
  {path: 'update-game/:id', canActivate: [UserGuard], component: GameUpdateComponent},
  {path: 'profile', canActivate: [UserGuard], component: UserProfileComponent},
  {path: 'update-user/:id', canActivate: [UserGuard], component: UserUpdateComponent},

  // Admin path
  {path: 'admin-profile', canActivate: [AdminGuard], component: AdminProfileComponent },
  {path: 'games-list', canActivate: [AdminGuard], component: GamesListComponent },
  {path: 'users-infos/:id', canActivate: [AdminGuard], component: UsersInfosComponent },
  {path: 'admin-update-user/:id', canActivate: [AdminGuard], component: AdminUpdateUserComponent },
  {path: 'register', canActivate: [AdminGuard], component: RegisterComponent},

  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

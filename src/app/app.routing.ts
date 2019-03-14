import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'details/:id',
    component: ActivityDetailComponent
  },
  {
    path:'create-account',
    component: CreateUserComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'user/display/:uid',
    component: UserPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

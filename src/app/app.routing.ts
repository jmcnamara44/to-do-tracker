import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'details/:id',
    component: ActivityDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'create-account',
    component: CreateUserComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

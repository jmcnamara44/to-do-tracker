import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { CreateUserComponent } from './create-user/create-user.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

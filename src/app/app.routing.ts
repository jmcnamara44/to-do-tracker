import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'details',
    component: ActivityDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HeaderComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

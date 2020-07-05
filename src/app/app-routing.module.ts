import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/globalMethods/global-methods';

const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: './auth/demo-form/demo-form.module#DemoFormPageModule'
  // },
  {
    path: 'login',
    loadChildren: './auth/login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './auth/register/register.module#RegisterPageModule'
  },
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'forgot-password',
    loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordPageModule'
  },
  { path: 'common-page/:which-page', loadChildren: './common-page/common-page.module#CommonPagePageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

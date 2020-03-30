import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
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
    path: 'otp-verification',
    loadChildren: './auth/otp-verification/otp-verification.module#OtpVerificationPageModule'
  },
  {
    path: 'forgot-password-modal',
    loadChildren: './auth/forgot-password-modal/forgot-password-modal.module#ForgotPasswordModalPageModule'
  },
  {
    path: 'forgot-password',
    loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordPageModule'
  },
  { path: 'password-modal', loadChildren: './auth/password-modal/password-modal.module#PasswordModalPageModule' },
  { path: 'common-page/:which-page', loadChildren: './common-page/common-page.module#CommonPagePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';

import { Login } from '../auth/pages/login/login';
import { Register } from './pages/register/register';

@NgModule({
  declarations: [
    Login,
    Register
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPagePageRoutingModule } from './forgot-page-routing.module';

import { ForgotPagePage } from './forgot-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPagePageRoutingModule
  ],
  declarations: [ForgotPagePage]
})
export class ForgotPagePageModule {}

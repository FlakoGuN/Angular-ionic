import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServPageRoutingModule } from './serv-routing.module';

import { ServPage } from './serv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServPageRoutingModule
  ],
  declarations: [ServPage]
})
export class ServPageModule {}

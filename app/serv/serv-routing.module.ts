import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServPage } from './serv.page';

const routes: Routes = [
  {
    path: '',
    component: ServPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServPageRoutingModule {}

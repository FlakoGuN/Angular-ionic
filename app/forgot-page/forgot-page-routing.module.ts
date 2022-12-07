import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPagePage } from './forgot-page.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPagePageRoutingModule {}

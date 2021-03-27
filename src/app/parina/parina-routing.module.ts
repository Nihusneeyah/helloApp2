import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParinaPage } from './parina.page';

const routes: Routes = [
  {
    path: '',
    component: ParinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParinaPageRoutingModule {}

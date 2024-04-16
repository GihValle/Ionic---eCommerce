import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LitingPage } from './liting.page';

const routes: Routes = [
  {
    path: '',
    component: LitingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LitingPageRoutingModule {}

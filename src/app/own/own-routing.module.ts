import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnPage } from './own.page';

const routes: Routes = [
  {
    path: '',
    component: OwnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnPageRoutingModule {}

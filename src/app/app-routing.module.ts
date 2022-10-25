import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'extrato',
    pathMatch: 'full',
  },
  {
    path: 'extrato',
    component: SummaryComponent,
  },
  {
    path: 'nova-transferencia',
    component: TransferFormComponent,
  },
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}

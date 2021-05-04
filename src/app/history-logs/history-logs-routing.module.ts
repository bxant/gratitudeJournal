import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryLogsPage } from './history-logs.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryLogsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalEntryPage } from './journal-entry.page';

const routes: Routes = [
  {
    path: '',
    component: JournalEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalEntryPageRoutingModule {}

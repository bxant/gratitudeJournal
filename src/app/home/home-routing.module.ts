import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'journal-entry',
        loadChildren: () => import('../journal-entry/journal-entry.module').then( m => m.JournalEntryPageModule)
      },
      {
        path: 'history-logs',
        loadChildren: () => import('../history-logs/history-logs.module').then( m => m.HistoryLogsPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: '',
        redirectTo: '/home/journal-entry',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/journal-entry',
    pathMatch: 'full'
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

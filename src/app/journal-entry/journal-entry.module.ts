import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JournalEntryPageRoutingModule } from './journal-entry-routing.module';

import { JournalEntryPage } from './journal-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalEntryPageRoutingModule
  ],
  declarations: [JournalEntryPage]
})
export class JournalEntryPageModule {}

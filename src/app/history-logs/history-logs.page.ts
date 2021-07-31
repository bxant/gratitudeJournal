import { Component, OnInit } from '@angular/core';
// import for grabbing storage information
import { GratitudeService } from '../services/gratitude.service';
// import for use of gratitude Journal objects
import { JournalPageEntry } from '../data/journal-page-entry';

// Import for alerts on deletion of entries.
// Used for page navigations
import { ToastController, NavController, AlertController, MenuController } from '@ionic/angular';

// Storage Usage
import { Storage } from '@ionic/storage-angular';





@Component({
  selector: 'app-history-logs',
  templateUrl: './history-logs.page.html',
  styleUrls: ['./history-logs.page.scss'],
  template: '<ion-nav [root] = "rootPage"></ion-nav>'
})
export class HistoryLogsPage implements OnInit {

  // rootPage for viewing all history
  rootPage = HistoryLogsPage;

  // all journal entries from the previous journal entry
  private allJournalEntries:JournalPageEntry[] = [];
  
  // This list refers to entries searched for by the user.
  // Under Construction:
  // - Needs to be able to search through Months, Days, Year
  // - Needs to be able to search by actual text.
  private searchedEntriesRestore:JournalPageEntry[] = [];

  constructor(public GratService:GratitudeService, public NavControl: NavController,
    private storage:Storage) 
  {
    
  }

  ngOnInit() {
    // this.allJournalEntries = this.GratService.getAllJournalEntries();

    // this.searchedEntriesRestore = this.allJournalEntries;
  }

}

import { Component, OnInit } from '@angular/core';
// import for grabbing storage information
import { GratitudeService } from '../services/gratitude.service';
// import for use of gratitude Journal objects
import { JournalPageEntry } from '../data/journal-page-entry';


@Component({
  selector: 'app-history-logs',
  templateUrl: './history-logs.page.html',
  styleUrls: ['./history-logs.page.scss'],
})
export class HistoryLogsPage implements OnInit {

  private allJournalEntries:JournalPageEntry[];

  constructor(public GratService:GratitudeService) 
  {
    
  }

  ngOnInit() {
    
  }

}

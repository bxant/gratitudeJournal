import { Component, OnInit } from '@angular/core';
import { JournalEntryPage } from '../journal-entry/journal-entry.page';
import { GratitudeService } from '../services/gratitude.service';

@Component({
  selector: 'app-history-logs',
  templateUrl: './history-logs.page.html',
  styleUrls: ['./history-logs.page.scss'],
})
export class HistoryLogsPage implements OnInit {
  public entries:Array<any>;
  public show:boolean;
  public buttonText = "Show History"


  constructor() { }

  ngOnInit() {
    this.entries = GratitudeService.AllGratitudeJournalEntries;
    this.show = false;
    console.log(this.entries)
  }

  triggerShow(){
    console.log("Pressed Trigger")
    if (this.show == false){
      this.show = true;
      this.buttonText = "Hide History"
    }
    else{
      this.show = false;
      this.buttonText = "Show History"
    }
  }

}

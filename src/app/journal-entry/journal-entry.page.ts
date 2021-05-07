import { Component, OnInit } from '@angular/core';
import { GratitudeService } from '../services/gratitude.service';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.page.html',
  styleUrls: ['./journal-entry.page.scss'],
})
export class JournalEntryPage implements OnInit {

  public dayOfEntry:string;
  public journalEntryTextArray:Array<any>;
  public entry:string;
  public tempArray:Array<string>;

  constructor() { }

  ngOnInit() {
    // initialization of date on startup of page.
    this.date();
    this.journalEntryTextArray = [];
  }

  date()
  {
    // Void function, only used for updating dayOfEntry for Journal
    // Will display date of entry for user
    var stringDate = new Date;
    this.dayOfEntry = stringDate.toDateString();
  }

  makeDict(date, text){
    //makes dictionary of with date of entry and text from entry
    var dict = {"date": date, "text": text};
    return dict;
  }

  submitEntry()
  {
    // Submitting entry to gratitude journal database
    console.log("button pressed");
    //console.log(this.entry);
    var thisentry = this.makeDict(this.dayOfEntry, this.entry);
    //console.log(thisentry);
    this.journalEntryTextArray.push(thisentry);
    //console.log(this.journalEntryTextArray.length);
    //console.log(this.journalEntryTextArray)
    GratitudeService.AllGratitudeJournalEntries = this.journalEntryTextArray;
    console.log(GratitudeService.AllGratitudeJournalEntries)
    // should call data/gratitudeJournalEntry and fill constructor with required information.
    // look at constructor for more details.
    
  }

}

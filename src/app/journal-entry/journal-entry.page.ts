import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.page.html',
  styleUrls: ['./journal-entry.page.scss'],
})
export class JournalEntryPage implements OnInit {

  public dayOfEntry:string;

  constructor() { }

  ngOnInit() {
    // initialization of date on startup of page.
    this.date();
  }

  date()
  {
    // Void function, only used for updating dayOfEntry for Journal
    // Will display date of entry for user
    var stringDate = new Date;
    this.dayOfEntry = stringDate.toDateString();
  }

  submitEntry()
  {
    // Submitting entry to gratitude journal database
    console.log("button pressed");
  }

}

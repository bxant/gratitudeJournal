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
    this.date()
  }

  date()
  {
    // Will display date of entry for user
    var stringDate = new Date;
    this.dayOfEntry = stringDate.toDateString();
    return new Date;
  }

}

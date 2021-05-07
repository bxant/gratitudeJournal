import { Injectable } from '@angular/core';
import { JournalPageEntry } from '../data/journal-page-entry';

import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class GratitudeService {

  // Empty JournalPageEntry class array
  public static AllGratitudeJournalEntries:JournalPageEntry[] = [];

  // Constructor:
  // - JournalEntryDatabase: local storage
  constructor(private JournalEntryDatabase:Storage) { }

  async ngOnInit() {
    await this.JournalEntryDatabase.create();
  }

  public logGratitudeJournalEntry(gratitudeEntry:JournalPageEntry)
  {
    // takes in: JournalPageEntry type class
    // log gratitude journal entry into database
    GratitudeService.AllGratitudeJournalEntries.push(gratitudeEntry);
    this.JournalEntryDatabase.set(gratitudeEntry.id, gratitudeEntry);

  }

  public getAllJournalEntries()
  {
    var allValues = [];
    this.JournalEntryDatabase.forEach((value, key, index) => {
      allValues.push(new JournalPageEntry(value.journalEntryText));
    });
    return allValues;
  }

  public deleteFromStorage(ID:string)
  {
    this.JournalEntryDatabase.remove(ID);
  }
}

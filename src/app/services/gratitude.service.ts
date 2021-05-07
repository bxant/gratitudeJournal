import { Injectable } from '@angular/core';
import { JournalPageEntry } from '../data/journal-page-entry';
@Injectable({
  providedIn: 'root'
})
export class GratitudeService {

  public static AllGratitudeJournalEntries= [];

  constructor() { }

  public logGratitudeJournalEntry(gratitudeEntry:JournalPageEntry)
  {
    // log gratitude journal entry into database
    GratitudeService.AllGratitudeJournalEntries.push(gratitudeEntry);

  }
}

import { Component, OnInit } from '@angular/core';
import { GratitudeService } from '../services/gratitude.service';
import { JournalPageEntry } from '../data/journal-page-entry';


import { MenuController, ToastController, AlertController } from '@ionic/angular';


import { generate } from 'shortid';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.page.html',
  styleUrls: ['./journal-entry.page.scss'],
})
export class JournalEntryPage implements OnInit {

  public dayOfEntry:string;
  public journalEntryText:string;

  // Constructor: - GratitudeService added for logging of gratitude journal entries
  //              - Toaster for notification of successful submission.
  constructor(public GratService:GratitudeService, public toaster: ToastController) { }

  // TODO: Add toast controller, install into project
  // do error checking for duplicate gratitude entries.

  ngOnInit() {
    // initialization of date on startup of page.
    this.dayOfEntry = this.getDate();
    this.journalEntryText = '';
  }

  private getDate()
  {
    // Void function, only used for updating dayOfEntry for Journal
    // Will display date of entry for user
    var stringDate = new Date;
    return stringDate.toDateString();
  }

  public submitEntry()
  {
    // Submitting entry to gratitude journal database
    // complete the error checking. Check if duplicate journal entry.
    // Maybe to do later: check if duplicate entry, and if so, ask user if they would
    // like to replace their current journal entry with the newest updated one instead of just notifying
    // of successful submission.
    if (this.journalEntryText == '')
    {
      var emptyID = generate();
      this.giveFailedNotification(emptyID, "No entry added");
      this.GratService.deleteFromStorage(emptyID);
    }
    else
    {
      // keeps spaces.
      // var entryArraySplit = this.journalEntryText.split(/(\s+)/);
      // keeps only text
      var entrySplitSpaces = this.journalEntryText.split(" ");
      var entryToAdd = new JournalPageEntry(entrySplitSpaces);
      console.log(entryToAdd);
      // Already implemented with ionic storage
      this.GratService.logGratitudeJournalEntry(entryToAdd);
      this.giveSuccessNotification(entryToAdd.id, "Journal Entry Added!");
    }
  }

  async giveSuccessNotification(entryID:string, notificationString:string)
  {
    // This notification function will alert user if a journal entry was added
    // with the additional functionality of being able to delete the entry upon
    // pressing undo button.
    const add_toast = await this.toaster.create(
      {
        message: notificationString,
        duration: 2000,
        color: "medium",
        buttons: [
          {
            text: "Undo",
            handler: () =>
            {
              this.GratService.deleteFromStorage(entryID);
            }
          }
        ]
      });
    add_toast.present();
  }

  async giveFailedNotification(entryID:string, notificationString:string)
  {
    // This notification function will alert user if a journal entry was added
    // with the additional functionality of being able to delete the entry upon
    // pressing undo button.
    const add_toast = await this.toaster.create(
      {
        message: notificationString,
        duration: 2000,
        color: "medium"
      });
    add_toast.present();
  }

}

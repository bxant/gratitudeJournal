import { Component, OnInit } from '@angular/core';
import { GratitudeService } from '../services/gratitude.service';
import { JournalPageEntry } from '../data/journal-page-entry';
import { ToastController } from '@ionic/angular'

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
    console.log("button pressed");   
    // Submitting entry to gratitude journal database
    // TODO: Make sure to make the toast notification a separate function.
    // Also, complete the error checking. Check if duplicate journal entry.
    // Maybe to do later: check if duplicate entry, and if so, ask user if they would
    // like to replace their current journal entry with the newest updated one instead of just notifying
    // of successful submission.
    if (this.journalEntryText == '')
    {
      console.log("no text entered yet");
    }
    else
    {
      var entryToAdd = new JournalPageEntry(this.journalEntryText);
      // Already implemented with ionic storage
      this.GratService.logGratitudeJournalEntry(entryToAdd);
      this.giveNotification(entryToAdd.id);
    }
  }

  async giveNotification(entryID:string)
  {
    const add_toast = await this.toaster.create(
      {
        message: "journal entry added!",
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

}

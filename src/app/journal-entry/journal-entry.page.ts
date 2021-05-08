import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
  public lastEntry:string;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
    // initialization of date on startup of page.
    this.date();
    this.journalEntryTextArray = [];
    this.lastEntry ="";
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your entry has been submitted',
      duration: 2000
    });
    toast.present();
  }
  async alreadySubmittedToast() {
    const toast = await this.toastController.create({
      message: 'This is a duplicate submission',
      duration: 1000
    });
    toast.present();
  }

  submitEntry()
  {
    // Submitting entry to gratitude journal database
    console.log("button pressed");
    //checks if its submitting the same entry again
    if (this.entry == this.lastEntry){
      this.alreadySubmittedToast();
      return;
    }
    //gets saved into a dict["date":this.dayOfEntry, "text": this.entry]
    var thisentry = this.makeDict(this.dayOfEntry, this.entry);
    this.journalEntryTextArray.push(thisentry);
    GratitudeService.AllGratitudeJournalEntries = this.journalEntryTextArray;
    console.log(GratitudeService.AllGratitudeJournalEntries)
    this.presentToast();
    //saves entry to check against it later
    this.lastEntry = this.entry;
    // should call data/gratitudeJournalEntry and fill constructor with required information.
    // look at constructor for more details.
    
  }

}

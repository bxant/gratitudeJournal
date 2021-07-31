import { stringify } from '@angular/compiler/src/util';
import { generate } from 'shortid';

export class JournalPageEntry {

    id:string;
    loggedAt:Date;
    gText:Array<string>;
    

    constructor(gratitudeText:Array<string>)
    {
        // constructor takes in an ID, and when the entry was logged.
        this.id = generate();
        this.loggedAt = new Date();
        this.gText = gratitudeText;
    }

    dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

    fixSpacingForEntry(gratitudeText)
    {
        for (var i = 0; i < gratitudeText.length; i++)
        {
            console.log("gratText[i]: ", gratitudeText[i]);
        }
        return gratitudeText;
    }
}

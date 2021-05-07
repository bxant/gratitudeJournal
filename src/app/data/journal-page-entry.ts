//import { generate } from 'shortid';

export class JournalPageEntry {

    id:string;
    loggedAt:Date;
    gratitudeText:string;

    constructor(gratitudeText:string)
    {
        // constructor takes in an ID, and when the entry was logged.
        //this.id = generate();
        this.loggedAt = new Date();
    }

    dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}

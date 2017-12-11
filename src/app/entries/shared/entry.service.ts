// minimum required for an angular service is
// a class and the @injectable decorator

//import entry model
import { Entry } from './entry.model';

// import injectable decorator from angular core
import { Injectable } from "@angular/core";

// import http service
import { Http } from '@angular/http';

// injectable decorator
@Injectable()

// export service
export class EntryService {

    // using the keyword private or public allows the http
    // service to be accessed outside of the constructor
    constructor(private http: Http) {

    } // end constructor

    // post the comment data to the server and return a promise
    addComment(entryId: number, comment: {name: string; comment: string; }) {
        return this.http.post('/app/entries/${entryId}/comments', comment)
            .toPromise();
    } // end addComment

    // defining return to be a promise with an array of Entrys
    // this is known as a generic type which is a type within a type
    // a promise type containing an array of entry types
    getEntries(): Promise<Entry[]> {
        // url for entries api
        return this.http.get('/app/entries')
            .toPromise()
            // if you don't wrap in curly brackets the expression
            // is returned the as operator defines the type of the data object
            .then(response => response.json().data as Entry[]);
    } // end getEntries
} // end export
// import component decorator from angular core
import { Component, OnInit } from '@angular/core';

// import entry service 
import { EntryService } from '../shared/entry.service';

// import Entry model
import { Entry } from '../shared/entry.model';

// component decorator
@Component({
    // html target - should be kebab case
    selector: 'app-entry-list',
    // html view
    templateUrl: 'entry-list.component.html',
    // stylesheet
    styleUrls: ['entry-list.component.css']
}) // end component decorator

// export so it can be imported elsewhere
// the implements keyword lets the OnInit interface be integrated
export class EntryListComponent implements OnInit {

    // array for backend server entries
    entries: Entry[];
    
    constructor(private entryService: EntryService) {

    } // end constructor

    // implement OnInit
    ngOnInit() {
        this.entryService
            .getEntries()
            .then(entries => this.entries = entries);
    } // end ngOnIt
} // end export
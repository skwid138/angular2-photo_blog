// import component decorator from angular core
import { Component } from "@angular/core";

// import Entry model
import { Entry } from '../shared/entry.model';

// component decorator
@Component({
    // html target
    selector: 'app-entry',
    // html view
    templateUrl: 'entry.component.html',
    // stylesheet - changes to elements only 
    // effect what's on this components html
    styleUrls: ['entry.component.css']
}) // end component decorator

// export component
export class EntryComponent {
    // variables to be displayed on the DOM
    entry: Entry;
} // end export
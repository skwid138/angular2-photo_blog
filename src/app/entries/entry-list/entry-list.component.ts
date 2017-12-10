// import component decorator from angular core
import { Component } from '@angular/core';

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
export class EntryListComponent {
    // http parameter is defined as the Http service inside the constructor
    constructor() {

    } // end constructor
} // end export
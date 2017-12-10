// import component decorator from angular core
import { Component } from '@angular/core';

// component decorator
@Component({
    // html target - should be kebab case
    selector: 'app-entry-list',
    // view
    templateUrl: 'entry-list.component.html',
    // stylesheet
    styleUrls: ['entry-list.component.css']
}) // end component decorator

// export so it can be imported elsewhere
export class EntryListComponent {

} // end export
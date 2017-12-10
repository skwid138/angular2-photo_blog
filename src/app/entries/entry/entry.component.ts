// import component decorator from angular core
import { Component } from "@angular/core";

// component decorator
@Component({
    // html target
    selector: 'app-entry',
    // html view
    templateUrl: 'entry.component.html',
    // stylesheet
    styleUrls: ['entry.component.css']
}) // end component decorator

// export component
export class EntryComponent {

} // end export
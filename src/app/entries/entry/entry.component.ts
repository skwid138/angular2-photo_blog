// import component decorator from angular core
import { Component } from "@angular/core";

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
    title: string = 'My First Photo';
    photo: string = 'http://placehold.it/800x500?text=Angular Basics';
    description: string = 'A Description of My First Photo';
    comments: any[] = [
        {name: 'Reggie', comment: 'Worst Photo'},
        {name: 'Ethan', comment: 'Nice Picture!'},
        {name: 'Sebastian', comment: 'Hello World'}
    ]
} // end export
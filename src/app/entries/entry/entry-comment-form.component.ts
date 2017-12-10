// import component from angular core
import { Component } from '@angular/core';

// component decorator
@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
}) // end component decorator

//export class
export class EntryCommentFormComponent {
    name: string = '';
    comment: string = ''; 

} // end export
// import component, event emitter, and output from angular core
import { Component, EventEmitter, Output } from '@angular/core';
// event emitter is a way to pass data from one component to the next

// component decorator
@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
}) // end component decorator

//export class
export class EntryCommentFormComponent {
    name: string = '';
    comment: string = ''; 

    // event emitter uses generics to define types <{}>
    @Output() onCommentAdded = new EventEmitter<{name: string; comment: string;}>();
    // binding for form submission
    onSubmit() {
        let comment = { name: this.name, comment: this.comment};
        // emit comment when submit is clicked
        this.onCommentAdded.emit(comment);
    } // end onSubmit
} // end export
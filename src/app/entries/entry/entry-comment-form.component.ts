// import component, event emitter, output, and view child from angular core
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
// event emitter is a way to pass data from one component to the next
// output lets us capture data
// the viewchild decorator lets the component inspect the template
// for local variables - #[nameHere]="something" in the html
// and assigns the local variables as member properties of the component

// import ngForm
import { NgForm } from '@angular/forms';

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

    // bound to local variable on template and type format
    @ViewChild('commentForm') commentForm: NgForm; 

    // binding for form submission
    onSubmit(commentForm: NgForm) {
        let comment = { name: this.name, comment: this.comment};
        // emit comment when submit is clicked
        this.onCommentAdded.emit(comment);
        // clear form inputs when form is submitted
        this.commentForm.resetForm();
    } // end onSubmit
} // end export
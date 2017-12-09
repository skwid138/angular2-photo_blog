import { Component } from '@angular/core';

@Component({
    // target app-root tag from index.html
    // it can be called anything, but it is 
    // good practice to prefix them with 'app'
    selector: 'app-root',
    // this gets inserted between the app-root tags
    template: '<h2>Hello World!</h2>',
    styles: [
        `
        h2 {
            font-family: sans-serif;
            font-size: 1.2em;
        }
        `
    ]
})

export class AppComponent {

}
import { Component } from '@angular/core';

@Component({
    // target app-root tag from index.html
    // it can be called anything, but it is 
    // good practice to prefix them with 'app'
    selector: 'app-root',
    // this gets inserted between the app-root tags
    templateUrl: 'app.component.html',
    // this is an array since you can apply multiple styles
    styleUrls: ['app.component.css']
})

export class AppComponent {
    // emoji is an array of strings
    emoji: string[] = ['🎉', '😍', '😜', '👍'];
    // no initial value is being declared so a type must be specified
    activeEmoji: string;
    // on click function from html
    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    } // end changeEmoji
}
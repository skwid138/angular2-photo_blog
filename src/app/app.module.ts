// root module of app
// similar to client.js in my angularJS apps

// NgModule is the foundation of Angular and is required at least once for Angular to work
import { NgModule } from '@angular/core';

// BrowserModule is browser specific features
import { BrowserModule } from '@angular/platform-browser';

//import http module for making requests to server
import { HttpModule } from '@angular/http';

//import forms module
import { FormsModule } from '@angular/forms';

// import angular in memory web api module
// connects in memory service with http service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

//import app components into app module
import { AppComponent } from './app.component';

// import all components inside the entries directory using index.ts (barrel)
import { EntryListComponent, EntryComponent, EntryService } from './entries';

// import in memory entry service from backend file
import { InMemoryEntryService } from './backend';


// this is called a decorator
@NgModule({
    // imports is only for Angular modules and not JavaScript modules
    imports: [
        BrowserModule, 
        HttpModule,
        FormsModule,
        // registers these modules components and services for use
        // this should not be used in a production setting, 
        // but is great for educational or test environments
        InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],
    // the providers property is designed to hold services
    providers: [EntryService],
    // all components must be entered into declarations
    declarations: [
        AppComponent,
        // when using a barrel components 
        // must still be listed here
        // child components must be entered first
        EntryComponent,
        EntryListComponent
    ],
    // collection of top level components generally there is only one per application
    bootstrap: [AppComponent]
})
// export appModule so it can be used in other modules within the app
export class AppModule {

}
// root module of app
// similar to client.js in my angularJS apps

// NgModule is the foundation of Angular and is required at least once for Angular to work
import { NgModule } from '@angular/core';
// BrowserModule is browser specific features
import { BrowserModule } from '@angular/platform-browser';

//import app components into app module
import { AppComponent } from './app.component';

// import all components inside the entries directory using index.ts (barrel)
import { EntryListComponent } from './entries';


// this is called a decorator
@NgModule({
    imports: [BrowserModule],
    // all components must be entered into declarations
    declarations: [
        AppComponent,
        EntryListComponent
    ],
    // collection of top level components generally there is only one per application
    bootstrap: [AppComponent]
})
// export appModule so it can be used in other modules within the app
export class AppModule {

}
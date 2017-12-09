// this file will contain the application code

// webpack recognizes this and will import global stylesheet
import './styles/main.css';

// this should be changed for deployment as it makes a larger file
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// below creates a smaller file and should be used for production
// import { platformBrowser } from '@angular/platform-browser';

// import appModule
import { AppModule } from './app/app.module';
import { platformBrowser } from '@angular/platform-browser/src/browser';

platformBrowserDynamic().bootstrapModule(AppModule);
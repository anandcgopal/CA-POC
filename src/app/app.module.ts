import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EstimatedEntries } from './entries/app.estimated.entries';
import { EntryService } from './entries/entry.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EstimatedEntries ],
  providers: [ EntryService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

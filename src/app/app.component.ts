import { Component } from '@angular/core';
import { EntryService } from './entries/entry.service';

@Component({
  selector: 'my-app',
  template: `<estimated-entries [entries]="name1"></estimated-entries>`,
})
export class AppComponent  {

  name1:any[];
  constructor(private entryService: EntryService){
    //just comment1
    this.name1=entryService.getEntries();
  }


 }

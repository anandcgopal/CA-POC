import { NgFor } from '@angular/common/src/directives/ng_for';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'estimated-entries',
  template: `
  <ul>
  <li *ngFor="let entry of entries" (click)="setSelected(entry.id)">
  <div class="#innerContainer">{{entry.id}} | {{entry.description}} | {{entry.code}} | {{entry.status}}</div>
 <div></div>
  </li>
  </ul>

  <h4>You have selected {{this.selectedValue}}</h4>
  `
})
export class EstimatedEntries  { 
  selectedValue:string;
  @Input() entries:any;
  constructor(){

  }
  setSelected(id:string){
    this.selectedValue=id;
  }
    
 }

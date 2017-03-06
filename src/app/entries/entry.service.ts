import { Injectable } from '@angular/core';

@Injectable()
export class EntryService{
    getEntries(){
        return ENTRIES;
    }
}

const ENTRIES =[
    {
        id:9075,
        description:'Art and Design',
        options:['A','B','C','D'],
        code:1254,
        status:"complete"
    }
    
    
    ];
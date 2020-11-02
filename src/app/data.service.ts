import { Injectable } from '@angular/core';
import { MOCK_DATA } from './mock/data';
import { Search } from './mock/search';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  CURRENT_DATA = MOCK_DATA;
  PERSON_LIST = this.CURRENT_DATA.persons;
  constructor() { }

  searchAdress(text: string): void {
    this.PERSON_LIST = this.CURRENT_DATA.persons.filter(person => Search(person, text));
  }

}

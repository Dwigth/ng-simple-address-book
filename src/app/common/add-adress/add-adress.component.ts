import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-adress.component.html',
  styleUrls: ['./add-adress.component.scss']
})
export class AddAdressComponent implements OnInit {

  constructor(public dataS: DataService) { }

  ngOnInit(): void {
  }

  Search(text: string) {
    this.dataS.searchAdress(text.toLowerCase());
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adress-collection',
  templateUrl: './adress-collection.component.html',
  styleUrls: ['./adress-collection.component.scss']
})
export class AdressCollectionComponent implements OnInit {

  constructor(public dataS: DataService) { }

  ngOnInit(): void { }

}

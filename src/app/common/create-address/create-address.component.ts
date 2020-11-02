import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Person } from 'src/app/mock/data';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss']
})
export class CreateAddressComponent implements OnInit {

  AddForm = new FormGroup({
    name: new FormControl(),
    lastName: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
  });

  constructor(public dataS: DataService, public router: Router) { }

  ngOnInit(): void {
  }

  Create() {
    const len = this.dataS.PERSON_LIST.length + 1;
    const person: Person = {
      name: this.AddForm.get('name').value,
      lastName: this.AddForm.get('lastName').value,
      address: this.AddForm.get('address').value,
      phoneNumber: this.AddForm.get('phoneNumber').value,
      id: len
    };
    this.dataS.PERSON_LIST.push(person);
    this.router.navigateByUrl('/main');
  }

}

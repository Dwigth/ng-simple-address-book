import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Person } from 'src/app/mock/data';

@Component({
  selector: 'app-edit-adress',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAdressComponent implements OnInit {

  EDIT_PERSON: Person = {} as any;
  ARRAY_POS: number;

  EditForm: FormGroup;

  constructor(public dataS: DataService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const subs = this.activatedRoute.params.subscribe(params => {
      const id = +params.addressId;
      this.EDIT_PERSON = this.dataS.PERSON_LIST.find(person => person.id === id);
      this.ARRAY_POS = this.dataS.PERSON_LIST.findIndex(person => person.id === id);

      this.EditForm = new FormGroup({
        name: new FormControl(this.EDIT_PERSON.name),
        lastName: new FormControl(this.EDIT_PERSON.lastName),
        phoneNumber: new FormControl(this.EDIT_PERSON.phoneNumber),
        address: new FormControl(this.EDIT_PERSON.address),
        id: new FormControl(this.EDIT_PERSON.id),
      });
    });
    subs.unsubscribe();
  }

  Edit() {
    this.dataS.PERSON_LIST[this.ARRAY_POS] = this.EditForm.value as Person;
    this.router.navigateByUrl('/main');
  }

  Delete() {
    this.dataS.PERSON_LIST.splice(this.ARRAY_POS, 1);
    this.router.navigateByUrl('/main');
  }

}

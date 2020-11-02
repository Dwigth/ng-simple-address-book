import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdressCollectionComponent } from './common/adress-collection/adress-collection.component';
import { AddAdressComponent } from './common/add-adress/add-adress.component';
import { EditAdressComponent } from './common/edit-address/edit-address.component';
import { AddAddressComponent } from './common/add-address/add-address.component';
import { CreateAddressComponent } from './common/create-address/create-address.component';
import { MainComponent } from './common/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdressCollectionComponent,
    AddAdressComponent,
    EditAdressComponent,
    AddAddressComponent,
    CreateAddressComponent,
    MainComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

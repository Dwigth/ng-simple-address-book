import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAddressComponent } from './common/create-address/create-address.component';
import { EditAdressComponent } from './common/edit-address/edit-address.component';
import { MainComponent } from './common/main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'add',
    component: CreateAddressComponent
  },
  {
    path: 'edit/:addressId',
    component: EditAdressComponent
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

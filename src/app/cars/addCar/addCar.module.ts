import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCarPage } from './addCar.page';
import { AddCarPageRoutingModule } from './addCar-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCarPageRoutingModule
  ],
  declarations: [AddCarPage]
})
export class AddCarPageModule {}

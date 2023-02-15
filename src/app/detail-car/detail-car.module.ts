import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCarPageRoutingModule } from './detail-car-routing.module';

import { DetailCarPage } from './detail-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCarPageRoutingModule
  ],
  declarations: [DetailCarPage]
})
export class DetailCarPageModule {}

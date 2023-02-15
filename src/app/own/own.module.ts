import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnPageRoutingModule } from './own-routing.module';

import { OwnPage } from './own.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnPageRoutingModule
  ],
  declarations: [OwnPage]
})
export class OwnPageModule {}

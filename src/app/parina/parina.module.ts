import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParinaPageRoutingModule } from './parina-routing.module';

import { ParinaPage } from './parina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParinaPageRoutingModule
  ],
  declarations: [ParinaPage]
})
export class ParinaPageModule {}

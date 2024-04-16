import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LitingPageRoutingModule } from './liting-routing.module';

import { LitingPage } from './liting.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LitingPageRoutingModule,
    SearchbarModule
  ],
  declarations: [LitingPage]
})
export class LitingPageModule {}

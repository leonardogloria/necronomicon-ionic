import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DisciplinesPage } from './disciplines';

@NgModule({
  declarations: [
    DisciplinesPage,
  ],
  imports: [
    IonicPageModule.forChild(DisciplinesPage),
    TranslateModule.forChild()
  ],
  exports: [
    DisciplinesPage
  ]
})
export class DisciplinesPageModule { }

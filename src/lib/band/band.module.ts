import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faDizzy,
  faSmileWink,
  faSave
} from '@fortawesome/free-solid-svg-icons';

import * as fromContainers from './containers';

const routes: Routes = [
  { path: '', component: fromContainers.BandLayoutComponent }
];

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    FormsModule
  ]
})
export class BandModule {
  constructor() {
    library.add(faArrowLeft, faDizzy, faSmileWink, faSave);
  }
}

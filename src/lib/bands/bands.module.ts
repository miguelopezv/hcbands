import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faSpinner,
  faExclamation
} from '@fortawesome/free-solid-svg-icons';

const routes: Routes = [
  { path: '', component: fromContainers.BandsLayoutComponent }
];

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, RouterModule.forChild(routes), FontAwesomeModule]
})
export class BandsModule {
  constructor() {
    library.add(faPlus, faSpinner, faExclamation);
  }
}

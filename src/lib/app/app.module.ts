import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [fromComponents.AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faSpinner);
  }
}

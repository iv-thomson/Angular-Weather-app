import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { IconComponent } from './shared/icon/icon.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { Safe } from './pipes/safe-html';
import { SearchComponent } from './shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    IconComponent,
    Safe,
    ButtonComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

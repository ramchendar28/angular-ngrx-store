import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects'

import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';

import { AppReducer } from './ngrx-store/app.reducer'
import { AppEffect } from './ngrx-store/app.effects'


@NgModule({
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({ app: AppReducer }),
    EffectsModule.forRoot([AppEffect])],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TimeZoneInputComponent } from './time-zone-input/time-zone-input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ShowResultComponent } from './show-result/show-result.component';

const routes = [
  {
    path: 'timeZoneInput',
    component: TimeZoneInputComponent
  },
  {
    path: 'date-picker',
    component: DatePickerComponent
  },
  {
    path: 'custom-input',
    component: CustomInputComponent
  },
  {
    path: 'show-result',
    component: ShowResultComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    TimeZoneInputComponent,
    CustomInputComponent,
    ShowResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

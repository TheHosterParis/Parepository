import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { jqxBarGaugeModule }  from 'jqwidgets-ng/jqxbargauge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxBarGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HojaVidaComponent } from './hoja-vida/hoja-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    HojaVidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

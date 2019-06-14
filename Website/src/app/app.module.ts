//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

//Services
import { HttpConfigService } from 'src/config/http-config.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [
    HttpConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

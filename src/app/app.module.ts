import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StreamingCaptureComponent } from './streaming-capture/streaming-capture.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { AppDevelopComponent } from './app-develop/app-develop.component';
import { TdDesignComponent } from './td-design/td-design.component';
import { HomeComponent } from './home/home.component';
import { UsComponent } from './us/us.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    FooterComponent,
    StreamingCaptureComponent,
    WebDesignComponent,
    AppDevelopComponent,
    TdDesignComponent,
    HomeComponent,
    UsComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

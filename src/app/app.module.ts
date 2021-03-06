import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    NavbarComponent,
    InfoComponent,
    FooterComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

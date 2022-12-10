import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { HomeopathyModule } from './homeopathy/homeopathy.module';
import { InMemoryDataService } from './in-memory-data.service';
import { PageerrorModule } from './page-error/page-error.module';
import { SoundPlayerModule } from './sound-player/sound-player.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    BrowserModule,
    SoundPlayerModule,
    HomePageModule,
    HomeopathyModule,
    PageerrorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SpeedingComponent} from './speeding/speeding.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import {FooterComponent} from './footer/footer.component';
import {NgxGoogleAnalyticsModule} from "ngx-google-analytics";


@NgModule({
  declarations: [
    AppComponent,
    SpeedingComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxGoogleAnalyticsModule.forRoot('G-DPZJPVGHM2'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

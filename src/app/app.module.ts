import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DynamicBackgroundComponent } from './dynamic-background/dynamic-background.component';
import { SumstrokeComponent } from './sumstroke/sumstroke.component';
import { TestcalendarComponent } from './testcalendar/testcalendar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

/*fullcalendar imports*/
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

/*firebase imports*/
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';

/*somthin not right import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';*/

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

const firebaseConfig = {
  apiKey: "AIzaSyC_5l2hGQlNX662KYf-hr8_ytCsdEUm6lk",
  authDomain: "realtimethesis.firebaseapp.com",
  databaseURL: "https://realtimethesis.firebaseio.com",
  projectId: "realtimethesis",
  storageBucket: "realtimethesis.appspot.com",
  messagingSenderId: "1097391395895",
  appId: "1:1097391395895:web:89e436814bad7a49329bb2",
  measurementId: "G-XPEX68FFV7"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DynamicBackgroundComponent,
    SumstrokeComponent,
    TestcalendarComponent,
    LoginComponent,
    SignupComponent,
    NewsComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    CarouselModule
    /* nope 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/*these are a problem
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

export class AppModule { }

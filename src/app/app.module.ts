import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DynamicBackgroundComponent } from './dynamic-background/dynamic-background.component';
import { SumstrokeComponent } from './sumstroke/sumstroke.component';
import { TestcalendarComponent } from './testcalendar/testcalendar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';

/*fullcalendar imports*/
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

/*firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";//getdatabase
import { getDatabase } from "firebase/database";*/

//import { AngularFireModule } from '@angular/fire';
//import { AngularFireAuthModule } from '@angular/fire/auth';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
/*somthin not right import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';*/

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

/*//this might not belong here - see environment.ts!!! if useless, delete
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

const db = getDatabase(app);*/
//getref
//delete all the way to here if needed

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
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FullCalendarModule,
    CarouselModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

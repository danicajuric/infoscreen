import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'infoscreen';
  
  //firebase constructor
  constructor(db: AngularFireDatabase) { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
  };

  customOptions: OwlOptions = {
    center: true,
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    autoplaySpeed: 5000,
    navSpeed: 5000
  }
}

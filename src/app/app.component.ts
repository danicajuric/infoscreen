import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infoscreen';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  customOptions: OwlOptions = {
    center: true,
    autoplay:true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
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
    autoplaySpeed: 500,
    navSpeed: 450
  }
}

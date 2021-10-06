import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumstrokeComponent } from './sumstroke/sumstroke.component';
import { TestcalendarComponent } from './testcalendar/testcalendar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: "sumstroke",
    component: SumstrokeComponent
  },
  {
    path: "testcalendar",
    component: TestcalendarComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "weather",
    component: WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

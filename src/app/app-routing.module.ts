import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumstrokeComponent } from './sumstroke/sumstroke.component';
import { TestcalendarComponent } from './testcalendar/testcalendar.component';

const routes: Routes = [
  {
    path: "sumstroke",
    component: SumstrokeComponent
  },
  {
    path: "testcalendar",
    component: TestcalendarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

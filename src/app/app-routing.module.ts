import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumstrokeComponent } from './sumstroke/sumstroke.component';

const routes: Routes = [
  {
    path: "sumstroke",
    component: SumstrokeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

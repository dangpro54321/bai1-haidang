import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from './slide/slide.component';


const routes: Routes = [
  {path:"home", component: SlideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

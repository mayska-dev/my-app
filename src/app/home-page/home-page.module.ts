import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

const homePage: Routes = [
  { path: '', component: HomePageComponent }
]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homePage)
  ]
})
export class HomePageModule { }

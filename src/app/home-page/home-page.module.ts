import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


const homePage: Routes = [
  { path: '', component: HomePageComponent }
]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homePage),
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ]
})
export class HomePageModule { }

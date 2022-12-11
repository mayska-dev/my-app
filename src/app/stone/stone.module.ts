import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStoneComponent } from './list-stone/list-stone.component';
import { DetailStoneComponent } from './detail-stone/detail-stone.component';
import { RouterModule, Routes } from '@angular/router';
import { StoneService } from './stone.service';
import { TransmuteComponent } from './transmute/transmute.component';

const stronesRoutes: Routes = [
  { path: 'stones', component: ListStoneComponent },
  { path: 'stone/:id', component: DetailStoneComponent },
  { path: 'transmute', component: TransmuteComponent }
]


@NgModule({
  declarations: [
    ListStoneComponent,
    DetailStoneComponent,
    TransmuteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(stronesRoutes)
  ],providers:[
    StoneService
  ]
})
export class StoneModule { }

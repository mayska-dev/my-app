import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailHomeopathyComponent } from './detail-homeopathy/detail-homeopathy.component';
import { ListHomeopathyComponent } from './list-homeopathy/list-homeopathy.component';
import { HomeopathyService } from './homeopathy.service';

const homeopathieRoutes: Routes = [
  { path: 'homeopathies', component: ListHomeopathyComponent },
  { path: 'homeopathy/:id', component: DetailHomeopathyComponent },
]

@NgModule({
  declarations: [
    ListHomeopathyComponent,
    DetailHomeopathyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeopathieRoutes)
  ],
  providers: [
    HomeopathyService
  ]
})
export class HomeopathyModule { }

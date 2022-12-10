import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailHomeopathyComponent } from './detail-homeopathy/detail-homeopathy.component';
import { ListHomeopathyComponent } from './list-homeopathy/list-homeopathy.component';
import { ServiceService } from './service.service';

const homeopathieRoutes: Routes = [
  { path: 'homeopathies', component: ListHomeopathyComponent },
  { path: 'homeopathy/:id', component: DetailHomeopathyComponent },
]

export interface Homeopathie {
  id: number;
  name: string;
  description: string;
  picture:string;
}

@NgModule({
  declarations: [
    ListHomeopathyComponent,
    DetailHomeopathyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeopathieRoutes)
  ],
  providers: [
    ServiceService
  ]
})
export class HomeopathyModule { }

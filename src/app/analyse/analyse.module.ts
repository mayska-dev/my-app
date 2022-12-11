import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAnalyseComponent } from './list-analyse/list-analyse.component';
import { DetailAnalyseComponent } from './detail-analyse/detail-analyse.component';
import { RouterModule, Routes } from '@angular/router';
import { AnalyseService } from './analyse.service';

const analyseRoutes: Routes = [
  { path: 'analyses', component: ListAnalyseComponent },
  { path: 'analyse/:id', component: DetailAnalyseComponent },
]

@NgModule({
  declarations: [
    ListAnalyseComponent,
    DetailAnalyseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(analyseRoutes)
  ],
  providers:[
    AnalyseService
  ]
})
export class AnalyseModule { }

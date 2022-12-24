import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAnalyseComponent } from './list-analyse/list-analyse.component';
import { DetailAnalyseComponent } from './detail-analyse/detail-analyse.component';
import { RouterModule, Routes } from '@angular/router';
import { AnalyseService } from './analyse.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

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
    RouterModule.forChild(analyseRoutes),
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
  providers:[
    AnalyseService
  ]
})
export class AnalyseModule { }

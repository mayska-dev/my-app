import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Analyse } from '../analyse';
import { AnalyseService } from '../analyse.service';

@Component({
  selector: 'app-detail-analyse',
  templateUrl: './detail-analyse.component.html',
  styleUrls: ['./detail-analyse.component.css']
})
export class DetailAnalyseComponent implements OnInit {

  analyse: Analyse | undefined

  constructor(
    private route: ActivatedRoute,
    private analyseService:AnalyseService
  ){}

  ngOnInit() {
    const id: string | null = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.analyseService.getAnalyse(+id)
        .subscribe(analyse => this.analyse = analyse)
    }
  }
  
}

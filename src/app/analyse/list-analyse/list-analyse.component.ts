import { Component, OnInit } from '@angular/core';
import { Analyse } from '../analyse';
import { AnalyseService } from '../analyse.service';

@Component({
  selector: 'app-list-analyse',
  templateUrl: './list-analyse.component.html',
  styleUrls: ['./list-analyse.component.css']
})
export class ListAnalyseComponent implements OnInit {

  analyseList: Analyse[] = []

  constructor(private service:AnalyseService){}

  ngOnInit() {
    this.service.getAnalyseList()
    .subscribe(analyseList => this.analyseList = analyseList)
  }
  
}

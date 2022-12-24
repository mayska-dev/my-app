import { Component, OnInit } from '@angular/core';
import { AnalyseService } from 'src/app/analyse/analyse.service';
import { Homeopathy } from '../homeopathy';
import { HomeopathyService } from '../homeopathy.service';

@Component({
  selector: 'app-homeopathylist',
  templateUrl: './list-homeopathy.component.html',
  styleUrls: ['./list-homeopathy.component.css']
})
export class ListHomeopathyComponent implements OnInit {

  homeopatyList: Homeopathy[] = [];

  constructor(
    private homeopathyService: HomeopathyService
  ) { }

  ngOnInit() {
    this.homeopathyService.getHomeopaties()
      .subscribe(homeopatyList => this.homeopatyList = homeopatyList);
    


  }


}

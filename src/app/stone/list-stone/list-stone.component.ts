import { Component, OnInit } from '@angular/core';
import { Stone } from '../stone';
import { StoneService } from '../stone.service';

@Component({
  selector: 'app-list-stone',
  templateUrl: './list-stone.component.html',
  styleUrls: ['./list-stone.component.css']
})
export class ListStoneComponent implements OnInit {

  stoneList: Stone[] = []

  constructor(
    private stoneService: StoneService
  ) { }

  ngOnInit() {
    this.stoneService.getStones()
      .subscribe(stoneList => this.stoneList = stoneList)
  }

}

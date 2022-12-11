import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Stone } from '../stone';
import { StoneService } from '../stone.service';

@Component({
  selector: 'app-transmute',
  templateUrl: './transmute.component.html',
  styleUrls: ['./transmute.component.css']
})
export class TransmuteComponent implements OnInit, OnChanges {

  stone: Stone | undefined
  stoneList: Stone[] = []

  constructor(
    private stoneService: StoneService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.stoneService.getStones()
      .subscribe(stoneList => this.stoneList = stoneList);
    this.stoneService.getStone(1)
      .subscribe(stone => this.stone = stone);
  }

  clickNext() {
    if (this.stone?.id) {
      const id: number = +this.stone?.id + 1
      if (id > this.stoneList.length) {
        this.stoneService.getStone(1)
          .subscribe(stone => this.stone = stone);
      } else {
        this.stoneService.getStone(id)
          .subscribe(stone => this.stone = stone);
      }
    }

  }
}
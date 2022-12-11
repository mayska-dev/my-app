import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stone } from '../stone';
import { StoneService } from '../stone.service';

@Component({
  selector: 'app-detail-stone',
  templateUrl: './detail-stone.component.html',
  styleUrls: ['./detail-stone.component.css']
})
export class DetailStoneComponent implements OnInit {

  stone: Stone | undefined
  stoneList: Stone[] = []
  constructor(
    private stoneService:StoneService,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    const id: string | null = this.route.snapshot.paramMap.get('id')
    if(id){
      this.stoneService.getStone(+id)
      .subscribe(stone => this.stone = stone)
      this.stoneService.getStones().subscribe(stoneList => this.stoneList = stoneList)
    }
  }

}

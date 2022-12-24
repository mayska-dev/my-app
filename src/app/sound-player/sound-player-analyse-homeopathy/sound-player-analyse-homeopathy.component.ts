import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { all } from '../data/all';
import { ElementList } from '../sound-player.module';

@Component({
  selector: 'app-sound-player-analyse-homeopathy',
  templateUrl: './sound-player-analyse-homeopathy.component.html',
  styleUrls: ['./sound-player-analyse-homeopathy.component.css']
})
export class SoundPlayerAnalyseHomeopathyComponent implements OnInit {

  displayedColumns: string[] = ['name', 'plante', 'description'];
  progress: number = 0
  name: string = ''
  dataSource: ElementList[] = []

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const name: string | null = this.route.snapshot.paramMap.get('name')
    switch (name) {
      case 'all': {
        this.name = name
        this.dataSource = all
        console.log(this.dataSource)
        break;
      }
      default: {
        this.name = 'all'
        break;
      }
    }
    this.waitAndUpdateProgress();
  }

  async waitAndUpdateProgress() {
    this.progress = 0;
    for (let i = 0; i <= 100; i++) {
      this.progress = i;
      await this.delay(100);
    }
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}

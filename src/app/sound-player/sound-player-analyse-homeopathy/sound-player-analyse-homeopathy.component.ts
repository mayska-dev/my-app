import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-sound-player-analyse-homeopathy',
  templateUrl: './sound-player-analyse-homeopathy.component.html',
  styleUrls: ['./sound-player-analyse-homeopathy.component.css']
})
export class SoundPlayerAnalyseHomeopathyComponent implements OnInit {

  progress = 0

  constructor(){}
  ngOnInit() {
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
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  

}

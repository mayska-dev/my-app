import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-sound',
  templateUrl: './play-sound.component.html',
  styleUrls: ['./play-sound.component.css']
})
export class PlaySoundComponent implements OnInit {

  progress: number = 0

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
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

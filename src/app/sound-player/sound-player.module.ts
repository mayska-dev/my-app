import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaySoundComponent } from './play-sound/play-sound.component';
import { RouterModule, Routes } from '@angular/router';
import { SoundPlayerAnalyseHomeopathyComponent } from './sound-player-analyse-homeopathy/sound-player-analyse-homeopathy.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';

export interface ElementList {
  name:string;
  plante:string;
  description:string
}

const soundPlayerRoutes: Routes = [
  { path: 'play-sound', component: PlaySoundComponent },
  { path: 'play-analyse/:name', component: SoundPlayerAnalyseHomeopathyComponent },
]

@NgModule({
  declarations: [
    PlaySoundComponent,
    SoundPlayerAnalyseHomeopathyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(soundPlayerRoutes),
    MatProgressBarModule,
    MatTableModule
  ]
})
export class SoundPlayerModule { }

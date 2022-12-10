import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaySoundComponent } from './play-sound/play-sound.component';
import { RouterModule, Routes } from '@angular/router';

const soundPlayerRoutes: Routes = [
  { path: 'play-sound', component: PlaySoundComponent },
]

@NgModule({
  declarations: [
    PlaySoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(soundPlayerRoutes)
  ]
})
export class SoundPlayerModule { }

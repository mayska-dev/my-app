import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySoundComponent } from './play-sound.component';

describe('PlaySoundComponent', () => {
  let component: PlaySoundComponent;
  let fixture: ComponentFixture<PlaySoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaySoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaySoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

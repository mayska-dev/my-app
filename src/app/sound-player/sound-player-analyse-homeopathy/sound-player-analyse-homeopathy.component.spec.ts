import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundPlayerAnalyseHomeopathyComponent } from './sound-player-analyse-homeopathy.component';

describe('SoundPlayerAnalyseHomeopathyComponent', () => {
  let component: SoundPlayerAnalyseHomeopathyComponent;
  let fixture: ComponentFixture<SoundPlayerAnalyseHomeopathyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundPlayerAnalyseHomeopathyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundPlayerAnalyseHomeopathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HomeopathyService } from '../homeopathy.service';

import { DetailHomeopathyComponent } from './detail-homeopathy.component';

describe('DetailHomeopathieComponent', () => {
  let component: DetailHomeopathyComponent;
  let fixture: ComponentFixture<DetailHomeopathyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ActivatedRoute,
        HomeopathyService
      ],
      declarations: [DetailHomeopathyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailHomeopathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('test')
  });
});

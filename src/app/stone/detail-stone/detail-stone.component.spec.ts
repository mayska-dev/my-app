import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStoneComponent } from './detail-stone.component';

describe('DetailStoneComponent', () => {
  let component: DetailStoneComponent;
  let fixture: ComponentFixture<DetailStoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

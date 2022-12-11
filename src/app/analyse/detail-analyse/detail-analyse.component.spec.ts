import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnalyseComponent } from './detail-analyse.component';

describe('DetailAnalyseComponent', () => {
  let component: DetailAnalyseComponent;
  let fixture: ComponentFixture<DetailAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

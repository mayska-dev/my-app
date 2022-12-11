import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmuteComponent } from './transmute.component';

describe('TransmuteComponent', () => {
  let component: TransmuteComponent;
  let fixture: ComponentFixture<TransmuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmuteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

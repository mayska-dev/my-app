import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoneComponent } from './list-stone.component';

describe('ListStoneComponent', () => {
  let component: ListStoneComponent;
  let fixture: ComponentFixture<ListStoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

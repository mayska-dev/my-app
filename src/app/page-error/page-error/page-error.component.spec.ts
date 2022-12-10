import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErrorComponent as PageErrorComponent } from './page-error.component';

describe('PageError', () => {
  let component: PageErrorComponent;
  let fixture: ComponentFixture<PageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageErrorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

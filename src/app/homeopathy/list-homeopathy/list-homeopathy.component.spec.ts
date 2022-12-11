import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeopathyModule } from '../homeopathy.module';
import { HomeopathyService } from '../homeopathy.service';

import { ListHomeopathyComponent as ListHomeopathyComponent } from './list-homeopathy.component';

describe('ListHomeopathieComponent', () => {
  let component: ListHomeopathyComponent;
  let fixture: ComponentFixture<ListHomeopathyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HomeopathyService
      ],
      declarations: [ListHomeopathyComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListHomeopathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const ngOnInit = component.ngOnInit()
    console.log('ngOnInit', ngOnInit)
  });
});

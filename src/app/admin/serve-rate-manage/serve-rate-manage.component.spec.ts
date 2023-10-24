import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeRateManageComponent } from './serve-rate-manage.component';

describe('ServeRateManageComponent', () => {
  let component: ServeRateManageComponent;
  let fixture: ComponentFixture<ServeRateManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServeRateManageComponent]
    });
    fixture = TestBed.createComponent(ServeRateManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

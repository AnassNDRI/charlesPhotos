import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRateDetailComponent } from './service-rate-detail.component';

describe('ServiceRateDetailComponent', () => {
  let component: ServiceRateDetailComponent;
  let fixture: ComponentFixture<ServiceRateDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceRateDetailComponent]
    });
    fixture = TestBed.createComponent(ServiceRateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

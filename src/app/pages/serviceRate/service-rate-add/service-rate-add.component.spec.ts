import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRateAddComponent } from './service-rate-add.component';

describe('ServiceRateAddComponent', () => {
  let component: ServiceRateAddComponent;
  let fixture: ComponentFixture<ServiceRateAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceRateAddComponent]
    });
    fixture = TestBed.createComponent(ServiceRateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureFormComponent } from './picture-form.component';

describe('PictureFormComponent', () => {
  let component: PictureFormComponent;
  let fixture: ComponentFixture<PictureFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureFormComponent]
    });
    fixture = TestBed.createComponent(PictureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

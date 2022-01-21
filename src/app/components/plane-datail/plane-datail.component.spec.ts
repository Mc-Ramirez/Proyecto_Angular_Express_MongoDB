import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneDatailComponent } from './plane-datail.component';

describe('PlaneDatailComponent', () => {
  let component: PlaneDatailComponent;
  let fixture: ComponentFixture<PlaneDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

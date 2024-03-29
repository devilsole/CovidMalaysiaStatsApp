import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CovidComponent } from './covid.component';

describe('CovidComponent', () => {
  let component: CovidComponent;
  let fixture: ComponentFixture<CovidComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

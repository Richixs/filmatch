import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Billboard } from './billboard';

describe('Billboard', () => {
  let component: Billboard;
  let fixture: ComponentFixture<Billboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Billboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Billboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

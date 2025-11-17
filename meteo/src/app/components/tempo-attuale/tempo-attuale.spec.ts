import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoAttuale } from './tempo-attuale';

describe('TempoAttuale', () => {
  let component: TempoAttuale;
  let fixture: ComponentFixture<TempoAttuale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempoAttuale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempoAttuale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

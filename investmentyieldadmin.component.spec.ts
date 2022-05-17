import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentyieldadminComponent } from './investmentyieldadmin.component';

describe('InvestmentyieldadminComponent', () => {
  let component: InvestmentyieldadminComponent;
  let fixture: ComponentFixture<InvestmentyieldadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentyieldadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentyieldadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

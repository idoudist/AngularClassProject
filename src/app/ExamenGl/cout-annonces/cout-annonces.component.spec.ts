import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutAnnoncesComponent } from './cout-annonces.component';

describe('CoutAnnoncesComponent', () => {
  let component: CoutAnnoncesComponent;
  let fixture: ComponentFixture<CoutAnnoncesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoutAnnoncesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

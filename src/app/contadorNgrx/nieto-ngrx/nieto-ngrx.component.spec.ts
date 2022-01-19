import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoNgrxComponent } from './nieto-ngrx.component';

describe('NietoNgrxComponent', () => {
  let component: NietoNgrxComponent;
  let fixture: ComponentFixture<NietoNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NietoNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

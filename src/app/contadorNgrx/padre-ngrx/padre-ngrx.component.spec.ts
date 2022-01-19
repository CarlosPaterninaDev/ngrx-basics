import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreNgrxComponent } from './padre-ngrx.component';

describe('PadreNgrxComponent', () => {
  let component: PadreNgrxComponent;
  let fixture: ComponentFixture<PadreNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

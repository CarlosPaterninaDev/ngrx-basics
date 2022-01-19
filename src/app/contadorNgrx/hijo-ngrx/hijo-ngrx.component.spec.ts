import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoNgrxComponent } from './hijo-ngrx.component';

describe('HijoNgrxComponent', () => {
  let component: HijoNgrxComponent;
  let fixture: ComponentFixture<HijoNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

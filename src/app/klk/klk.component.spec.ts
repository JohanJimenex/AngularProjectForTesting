import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlkComponent } from './klk.component';

describe('KlkComponent', () => {
  let component: KlkComponent;
  let fixture: ComponentFixture<KlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

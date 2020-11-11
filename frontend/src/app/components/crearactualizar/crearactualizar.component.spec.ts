import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearactualizarComponent } from './crearactualizar.component';

describe('CrearactualizarComponent', () => {
  let component: CrearactualizarComponent;
  let fixture: ComponentFixture<CrearactualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearactualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearactualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejamentoFinanceiroPage } from './planejamento-financeiro.page';

describe('PlanejamentoFinanceiroPage', () => {
  let component: PlanejamentoFinanceiroPage;
  let fixture: ComponentFixture<PlanejamentoFinanceiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanejamentoFinanceiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejamentoFinanceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

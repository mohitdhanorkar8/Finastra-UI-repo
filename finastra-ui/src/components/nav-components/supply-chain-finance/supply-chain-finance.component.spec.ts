import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainFinanceComponent } from './supply-chain-finance.component';

describe('SupplyChainFinanceComponent', () => {
  let component: SupplyChainFinanceComponent;
  let fixture: ComponentFixture<SupplyChainFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplyChainFinanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyChainFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

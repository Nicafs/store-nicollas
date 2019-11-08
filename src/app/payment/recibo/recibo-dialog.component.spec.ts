import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboDialogComponent } from './recibo-dialog.component';

describe('ReciboDialogComponent', () => {
  let component: ReciboDialogComponent;
  let fixture: ComponentFixture<ReciboDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciboDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

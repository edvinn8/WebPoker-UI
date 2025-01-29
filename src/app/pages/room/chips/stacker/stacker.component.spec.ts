import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackerComponent } from './stacker.component';

fdescribe('StackerComponent', () => {
  let component: StackerComponent;
  let fixture: ComponentFixture<StackerComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [StackerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct stacked values for 126 as 100 + 25 + 1', () => {
    component.valor = 126;

    component.recalcChips();

    console.log('component.chipsStacked.length: ', component.chipsStacked.length);
    expect(component.chipsStacked.length).toEqual(3);
  })
});

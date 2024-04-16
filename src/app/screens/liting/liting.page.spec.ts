import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LitingPage } from './liting.page';

describe('LitingPage', () => {
  let component: LitingPage;
  let fixture: ComponentFixture<LitingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LitingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

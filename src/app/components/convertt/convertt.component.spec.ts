import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverttComponent } from './convertt.component';

describe('ConverttComponent', () => {
  let component: ConverttComponent;
  let fixture: ComponentFixture<ConverttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

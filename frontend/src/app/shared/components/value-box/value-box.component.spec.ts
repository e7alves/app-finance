import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueBoxComponent } from './value-box.component';

describe('ValueBoxComponent', () => {
  let component: ValueBoxComponent;
  let fixture: ComponentFixture<ValueBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

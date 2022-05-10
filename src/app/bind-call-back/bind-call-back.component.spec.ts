import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindCallBackComponent } from './bind-call-back.component';

describe('BindCallBackComponent', () => {
  let component: BindCallBackComponent;
  let fixture: ComponentFixture<BindCallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindCallBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindCallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

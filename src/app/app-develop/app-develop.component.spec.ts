import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDevelopComponent } from './app-develop.component';

describe('AppDevelopComponent', () => {
  let component: AppDevelopComponent;
  let fixture: ComponentFixture<AppDevelopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDevelopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

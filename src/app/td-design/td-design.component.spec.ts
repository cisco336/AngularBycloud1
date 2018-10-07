import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdDesignComponent } from './td-design.component';

describe('TdDesignComponent', () => {
  let component: TdDesignComponent;
  let fixture: ComponentFixture<TdDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

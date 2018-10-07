import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingCaptureComponent } from './streaming-capture.component';

describe('StreamingCaptureComponent', () => {
  let component: StreamingCaptureComponent;
  let fixture: ComponentFixture<StreamingCaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingCaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

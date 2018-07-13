import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMaskComponent } from './content-mask.component';

describe('ContentMaskComponent', () => {
  let component: ContentMaskComponent;
  let fixture: ComponentFixture<ContentMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

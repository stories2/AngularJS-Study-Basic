import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDirectiveSampleComponent } from './style-directive-sample.component';

describe('StyleDirectiveSampleComponent', () => {
  let component: StyleDirectiveSampleComponent;
  let fixture: ComponentFixture<StyleDirectiveSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleDirectiveSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleDirectiveSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

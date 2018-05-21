import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomhttpComponent } from './customhttp.component';

describe('CustomhttpComponent', () => {
  let component: CustomhttpComponent;
  let fixture: ComponentFixture<CustomhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

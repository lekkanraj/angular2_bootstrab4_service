import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdatatableComponent } from './customdatatable.component';

describe('CustomdatatableComponent', () => {
  let component: CustomdatatableComponent;
  let fixture: ComponentFixture<CustomdatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomdatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

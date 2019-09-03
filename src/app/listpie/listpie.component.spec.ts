import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpieComponent } from './listpie.component';

describe('ListpieComponent', () => {
  let component: ListpieComponent;
  let fixture: ComponentFixture<ListpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

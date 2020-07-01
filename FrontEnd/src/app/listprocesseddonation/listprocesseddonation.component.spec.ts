import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprocesseddonationComponent } from './listprocesseddonation.component';

describe('ListprocesseddonationComponent', () => {
  let component: ListprocesseddonationComponent;
  let fixture: ComponentFixture<ListprocesseddonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListprocesseddonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprocesseddonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

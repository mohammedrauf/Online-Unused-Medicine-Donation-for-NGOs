import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdonationsComponent } from './listdonations.component';

describe('ListdonationsComponent', () => {
  let component: ListdonationsComponent;
  let fixture: ComponentFixture<ListdonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcauseComponent } from './fcause.component';

describe('FcauseComponent', () => {
  let component: FcauseComponent;
  let fixture: ComponentFixture<FcauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

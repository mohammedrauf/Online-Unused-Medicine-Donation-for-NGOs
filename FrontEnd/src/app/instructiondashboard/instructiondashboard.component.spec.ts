import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructiondashboardComponent } from './instructiondashboard.component';

describe('InstructiondashboardComponent', () => {
  let component: InstructiondashboardComponent;
  let fixture: ComponentFixture<InstructiondashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructiondashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructiondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

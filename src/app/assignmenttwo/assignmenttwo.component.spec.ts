import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmenttwoComponent } from './assignmenttwo.component';

describe('AssignmenttwoComponent', () => {
  let component: AssignmenttwoComponent;
  let fixture: ComponentFixture<AssignmenttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmenttwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

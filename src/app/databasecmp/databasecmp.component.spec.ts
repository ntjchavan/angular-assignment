import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasecmpComponent } from './databasecmp.component';

describe('DatabasecmpComponent', () => {
  let component: DatabasecmpComponent;
  let fixture: ComponentFixture<DatabasecmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabasecmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabasecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

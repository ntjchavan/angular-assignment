import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightcolordemoComponent } from './highlightcolordemo.component';

describe('HighlightcolordemoComponent', () => {
  let component: HighlightcolordemoComponent;
  let fixture: ComponentFixture<HighlightcolordemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightcolordemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightcolordemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

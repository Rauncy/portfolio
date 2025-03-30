import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGridComponent } from './entry-grid.component';

describe('EntryGridComponent', () => {
  let component: EntryGridComponent;
  let fixture: ComponentFixture<EntryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

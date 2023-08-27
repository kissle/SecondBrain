import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePreviewComponent } from './note-preview-component.component';

describe('NotePreviewComponent', () => {
  let component: NotePreviewComponent;
  let fixture: ComponentFixture<NotePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotePreviewComponent]
    });
    fixture = TestBed.createComponent(NotePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

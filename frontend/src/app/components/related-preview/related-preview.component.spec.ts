import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPreviewComponent } from './related-preview.component';

describe('BookPreviewComponent', () => {
  let component: RelatedPreviewComponent;
  let fixture: ComponentFixture<RelatedPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RelatedPreviewComponent]
    });
    fixture = TestBed.createComponent(RelatedPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

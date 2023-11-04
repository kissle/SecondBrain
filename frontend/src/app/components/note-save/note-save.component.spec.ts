import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteSaveComponent } from './note-save.component';

describe('NoteSaveComponent', () => {
  let component: NoteSaveComponent;
  let fixture: ComponentFixture<NoteSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteSaveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

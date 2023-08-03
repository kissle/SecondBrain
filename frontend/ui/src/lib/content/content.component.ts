import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'frontend-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnDestroy {
  @Input() label = 'Fancy Input';
  blur$ = new Subject<void>();
  destroy$ = new Subject<void>();
  @Input() placeholder = 'Tell us some text'
  @Input() control: FormControl = new FormControl();


  constructor() {
    this.blur$.pipe(
      tap(() => console.log(`Value on blur: ${this.control.value}`)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  onBlur() { 
    this.blur$.next(); 
  }

  ngOnDestroy() { 
    this.blur$.next();
    this.blur$.complete(); 
    this.destroy$.next();
    this.destroy$.complete();
  }
}

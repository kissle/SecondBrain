import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'frontend-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnDestroy {
  myControl = new FormControl('');
  label = 'Fancy Input';
  blur$ = new Subject<void>();
  destroy$ = new Subject<void>();

  constructor() {
    this.blur$.pipe(
      tap(() => console.log(`Value on blur: ${this.myControl.value}`)),
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

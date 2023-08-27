import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { IResource } from '../../models/resource.interface';
import { Observable, Subject, debounceTime, map, takeUntil, tap } from 'rxjs';
import { COMPONENT_MAPPING } from '../../models/component_mapping';

@Component({
  selector: 'frontend-related-preview',
  templateUrl: './related-preview.component.html',
  styleUrls: ['./related-preview.component.scss']
})
export class RelatedPreviewComponent implements AfterViewInit, OnDestroy {
  resource!: Observable<IResource | null>;
  @Input() updateRelatedResources!: EventEmitter<Observable<IResource[]>>;
  @Input() related$!: Observable<IResource[]>;

  @ViewChild('componentContainer', { read: ViewContainerRef })
  componentContainer!: ViewContainerRef;

  private destroy$: Subject<void> = new Subject<void>();

  loadRelatedObjects(resource: IResource[]) {
    this.componentContainer.clear();
    resource.forEach((related) => {
      const associatedObjectType = related.polymorphic_ctype.model;
      const componentType = COMPONENT_MAPPING[associatedObjectType];
      console.log(componentType)
      if (componentType) {
        const componentRef = this.componentContainer.createComponent(componentType);
        componentRef.instance.resource = related;
      }
      }
    )
  }
    
  ngAfterViewInit() {   
    console.log('init RelatedPreviewComponent')
    this.related$.pipe(
      tap(value => console.log('reaslkdfsf', value)),
      map((related) => {    
          this.loadRelatedObjects(related)
        }),
      tap(value => console.log(value)),
      takeUntil(this.destroy$)
    ).subscribe();

    this.updateRelatedResources.pipe(
      tap(value => console.log('updateRelatedResources', value)),
      tap(value => {
        this.related$ = value;
        this.related$.pipe(
          tap(value => console.log('reaslkdfsf', value)),
          map((related) => {    
              this.loadRelatedObjects(related)
            }),
          tap(value => console.log(value)),
          takeUntil(this.destroy$)
        ).subscribe();
    
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

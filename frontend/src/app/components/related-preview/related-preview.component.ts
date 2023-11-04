import { Component, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { IResource } from '../../models/resource.interface';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { COMPONENT_MAPPING } from '../../models/component_mapping';
import { RelationService } from '../../services/relations.service';
import { IRelationsDto } from '../../models/relations.model';

@Component({
  selector: 'frontend-related-preview',
  templateUrl: './related-preview.component.html',
  styleUrls: ['./related-preview.component.scss']
})
export class RelatedPreviewComponent implements OnDestroy, OnChanges {
  @Input() resourceType!: string;
  @Input() resourceID!: number;
  resource!: Observable<IResource | null>;

  @ViewChild('toComponentContainer', { read: ViewContainerRef }) toComponentContainer!: ViewContainerRef;
  @ViewChild('fromComponentContainer', { read: ViewContainerRef }) fromComponentContainer!: ViewContainerRef;

  rel$!: Observable<IRelationsDto>;

  constructor(private readonly relationService: RelationService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.rel$ = this.relationService.getRelationsForResource(this.resourceType, this.resourceID)
    .pipe(
      tap(value => console.log('getRelationsForResource', value)),
      tap(value => this.buildToRelationPreviews(value)),
      tap(value => this.buildfromRelationPreviews(value)),
      takeUntil(this.destroy$)
    )

    this.rel$.subscribe()
  }

  private destroy$: Subject<void> = new Subject<void>();

  buildToRelationPreviews(relations: IRelationsDto) {
    const relatedObjects = relations.to
    this.toComponentContainer.clear();
    relatedObjects.forEach((related) => {
      const associatedObjectType = related.polymorphic_ctype.model;
      const componentType = COMPONENT_MAPPING[associatedObjectType];
      console.log(componentType)
      if (componentType) {
        const componentRef = this.toComponentContainer.createComponent(componentType);
        componentRef.instance.resource = related;
      }
      }
    )
  }

  buildfromRelationPreviews(relations: IRelationsDto) {
    const relatedObjects = relations.from
    this.fromComponentContainer.clear();
    relatedObjects.forEach((related) => {
      const associatedObjectType = related.polymorphic_ctype.model;
      const componentType = COMPONENT_MAPPING[associatedObjectType];
      console.log(componentType)
      if (componentType) {
        const componentRef = this.fromComponentContainer.createComponent(componentType);
        componentRef.instance.resource = related;
      }
      }
    )
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

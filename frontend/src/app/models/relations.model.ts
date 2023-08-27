import { IResource } from "./resource.interface";

export interface IRelation {
    id: number;
    content_type: string;
    object_id: number;
    content_object: IResource;
}

export class Relation implements IRelation {
    id: number;
    content_type: string;
    object_id: number;
    content_object: IResource;

    constructor(id: number, content_type: string, object_id: number, content_object: IResource) {
        this.id = id;
        this.content_type = content_type;
        this.object_id = object_id;
        this.content_object = content_object;
    }
}

export interface IRelationContainer {
    id: number;
    content_type: string;
    object_id: number;
    content_object: IResource;
    relations: IRelation[];

    // addRelation(relation: IRelation): void;
}

export class RelationContainer implements IRelationContainer {
    id: number;
    content_type: string;
    object_id: number;
    content_object: IResource;
    relations: IRelation[];

    constructor(id: number, content_type: string, object_id: number, content_object: IResource) {
        this.id = id;
        this.content_type = content_type;
        this.object_id = object_id;
        this.content_object = content_object;
        this.relations = [];
    }

    // addRelation(relation: IRelation): void {
    //     this.relations.push(relation);
    // }
}
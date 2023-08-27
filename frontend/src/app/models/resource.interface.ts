import { PolyMorphicCType } from "./polymorphic_ctype.model";

export interface IResource {
    id: number;
    title: string;
    content_type: string;
    polymorphic_ctype: PolyMorphicCType;
    related: IResource[];
    url: string;

    addRelated(resource: IResource): void;

    isNote(): boolean;
    isBook(): boolean;
        

}
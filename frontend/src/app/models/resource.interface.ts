import { PolyMorphicCType } from "./polymorphic_ctype.model";

export interface IResource {
    id: number;
    title: string;
    polymorphic_ctype: PolyMorphicCType;

    isNote(): boolean;
    isBook(): boolean;
}
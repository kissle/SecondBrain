import { PolyMorphicCType } from "./polymorphic_ctype.model";
import { IResource } from "./resource.interface";

export interface INote extends IResource {
    content: string;
}

export class Note implements INote {
    id: number;
    title: string;
    content: string;
    content_type: string;
    related: IResource[];
    polymorphic_ctype: PolyMorphicCType;

    constructor(id: number, title: string, content: string, related: IResource[], polymorphic_ctype: PolyMorphicCType) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.content_type = 'note';
        this.related = related;
        this.polymorphic_ctype = polymorphic_ctype;
    }
    isNote(): boolean {
        return true;
    }
    isBook(): boolean {
        return false
    }

    addRelated(resource: IResource) {
        this.related.push(resource);
    }
}

export const MockNote = new Note(
    0, 
    'Five lines of Code explains refactoring', 
    'Five lines of Code explain practicable steps to refactor your software',
    [],
    new PolyMorphicCType(9, 'second_brain', 'note'))
import { PolyMorphicCType } from "./polymorphic_ctype.model";
import { IResource } from "./resource.interface";

export interface IBook extends IResource{
    id: number;
    title: string;
    subtitle: string;
    summary: string;
}

export class Book implements IBook {
    id: number;
    title: string;
    subtitle: string;
    summary: string;
    content_type: string;
    related: IResource[];
    url: string;
    polymorphic_ctype: PolyMorphicCType;

    constructor(id: number, title: string, subtitle: string,summary: string, url: string, polymorphic_ctype: PolyMorphicCType) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.summary = summary;
        this.content_type = 'book';
        this.related = [];
        this.url = url;
        this.polymorphic_ctype = polymorphic_ctype;
    }

    isNote(): boolean {
        return this.polymorphic_ctype.model === 'note';
    }
    isBook(): boolean {
        return false
    }

    addRelated(resource: IResource): void {
        this.related.push(resource);
    }
}

export const MockBook = new Book(0, 'Sopies Welt','Die Geschichte der Philosophie', 'Dieses Buch handelt von Sophies Erkunden der Philosophie.', '', new PolyMorphicCType(12, 'second_brain', 'book'))
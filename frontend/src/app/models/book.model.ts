import { PolyMorphicCType } from "./polymorphic_ctype.model";
import { IResource } from "./resource.interface";

export interface IBook extends IResource{
    subtitle: string;
    isbn: string;
}

export class Book implements IBook {
    id: number;
    title: string;
    subtitle: string;
    polymorphic_ctype: PolyMorphicCType;
    isbn: string;

    constructor(id: number, title: string, subtitle: string, polymorphic_ctype: PolyMorphicCType, isbn: string) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.polymorphic_ctype = polymorphic_ctype;
        this.isbn = isbn;
    }

    isNote(): boolean {
        return this.polymorphic_ctype.model === 'note';
    }
    isBook(): boolean {
        return false
    }
}

export const MockBook = new Book(0, 'Sopies Welt','Die Geschichte der Philosophie', new PolyMorphicCType(12, 'second_brain', 'book'), '978-3-492-23616-7')
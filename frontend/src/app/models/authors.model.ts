export interface IAuthor {
    id: number;
    first_name: string;
    last_name: string;
}

export class Author implements IAuthor {
    id: number;
    first_name: string;
    last_name: string;

    constructor(id: number, first_name: string, last_name: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
    }
}
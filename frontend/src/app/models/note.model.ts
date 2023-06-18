export interface INote {
    id: number;
    title: string;
    content: string;
}

export class Note implements INote {
    id: number;
    title: string;
    content: string;

    constructor(id: number, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
export interface INote {
    id: number;
    title: string;
    content: string;
    url: string;
}

export class Note implements INote {
    id: number;
    title: string;
    content: string;
    url: string;

    constructor(id: number, title: string, content: string, url: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.url = url;
    }
}
export class PolyMorphicCType {
    id: number
    app_label: string
    model: string

    constructor(id: number, app_label: string, model: string) {
        this.id = id
        this.app_label = app_label
        this.model = model
    }
}
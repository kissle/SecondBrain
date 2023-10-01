import { IResource } from "./resource.interface";

export interface IRelationsDto {
    to: IResource[];
    from: IResource[];
}
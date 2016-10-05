import { FileDoc } from './parser';
export declare function convertToDocgen(doc: FileDoc): {
    description: string;
    path: string;
    props: {};
}[];
export interface PropItemType {
    name: string;
    value?: any;
}
export interface PropItem {
    required: boolean;
    type: PropItemType;
    description: string;
    defaultValue: any;
}
export interface PropsObject {
    [key: string]: PropItem;
}
export interface Docgen {
    description: string;
    props: PropsObject;
}

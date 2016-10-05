import * as ts from 'typescript';
export interface ClassDoc {
    name: string;
    extends: string;
    propInterface: string;
    comment: string;
}
export interface InterfaceDoc {
    name: string;
    members: MemberDoc[];
    comment: string;
}
export interface MemberDoc {
    name: string;
    text: string;
    type: string;
    values?: string[];
    isRequired: boolean;
    comment: string;
}
export interface FileDoc {
    classes: ClassDoc[];
    interfaces: InterfaceDoc[];
}
/** Generate documention for all classes in a set of .ts files */
export declare function getDocumentation(fileName: string, options?: ts.CompilerOptions): FileDoc;

import * as ts from 'typescript';
export declare function navigate(node: ts.Node, ...path: ts.SyntaxKind[]): ts.Node;
export declare function getFlatChildren(node: ts.Node): ts.Node[];
export declare function dumpNode(node: ts.Node, prefix?: string): void;

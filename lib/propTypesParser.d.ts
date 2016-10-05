/**
 * Parser given file and return documentation in format compatibe with react-docgen.
 */
export declare function parse(filePath: string): {
    description: string;
    path: string;
    props: {};
}[];

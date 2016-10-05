"use strict";
var parser_1 = require('./parser');
var docgenConverter_1 = require('./docgenConverter');
/**
 * Parser given file and return documentation in format compatibe with react-docgen.
 */
function parse(filePath) {
    var doc = parser_1.getDocumentation(filePath);
    return docgenConverter_1.convertToDocgen(doc);
}
exports.parse = parse;
//# sourceMappingURL=propTypesParser.js.map
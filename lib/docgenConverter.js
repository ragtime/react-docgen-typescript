"use strict";
function convertToDocgen(doc) {
    var reactClasses = doc.classes.filter(function (i) { return i.extends === 'Component'; });
    if (reactClasses.length === 0) {
        return [];
    }
    var comp = reactClasses[0];
    var reactInterfaces = doc.interfaces.filter(function (i) { return i.name === comp.propInterface; });
    if (reactInterfaces.length === 0) {
        return [];
    }
    var props = reactInterfaces[0];
    return [
        {
            description: comp.comment,
            path: comp.name,
            props: props.members.reduce(function (acc, i) {
                var item = {
                    description: i.comment,
                    type: { name: i.type },
                    defaultValue: null,
                    required: i.isRequired
                };
                if (i.values) {
                    item.description = item.description + ' (one of the following:' + i.values.join(',') + ')';
                }
                acc[i.name] = item;
                return acc;
            }, {})
        }
    ];
}
exports.convertToDocgen = convertToDocgen;
/*
{
  "props": {
    "foo": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": "Description of prop \"foo\".",
      "defaultValue": {
        "value": "42",
        "computed": false
      }
    },
    "bar": {
      "type": {
        "name": "custom"
      },
      "required": false,
      "description": "Description of prop \"bar\" (a custom validation function).",
      "defaultValue": {
        "value": "21",
        "computed": false
      }
    },
    "baz": {
      "type": {
        "name": "union",
        "value": [
          {
            "name": "number"
          },
          {
            "name": "string"
          }
        ]
      },
      "required": false,
      "description": ""
    }
  },
  "description": "General component description."
}
*/ 
//# sourceMappingURL=docgenConverter.js.map
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/map"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("../validatable/map");
    class Map {
        constructor(validators, handler, validation) {
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
        }
        validate(argument) {
            return new map_1.default(argument, this.validators, this.handler, this.validation);
            //
            // let validatables = this.handler(argument, this.validators);
            // let validation = this.validation;
            // let validatable = validation(validatables);
            //
            // return  {
            //
            //     get validatables () {
            //         return validatables;
            //     },
            //     get validatable () {
            //         return validatable;
            //     },
            //     get value () {
            //         return argument;
            //     },
            //     get valid  () {
            //         return this.validatable.valid;
            //     }
            // }
        }
    }
    exports.default = Map;
});
//# sourceMappingURL=list.js.map
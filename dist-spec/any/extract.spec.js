"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extract_1 = require("../../dist/any/extract");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe("exists", function () {
    let array = [1, 2, 3, 4, 5];
    it("index 0", () => expect(extract_1.default(array, 0)).toBe(1));
    it("index 4", () => expect(extract_1.default(array, 4)).toBeUndefined());
    it("index 3", () => expect(extract_1.default(array, 3)).toBe(5));
    it("index -1", () => expect(extract_1.default(array, -1)).toBe(4));
});
describe("undefined", function () {
    let array = [1, 2, 3, 4, 5];
    it("index 5", () => expect(extract_1.default(array, 5)).toBeUndefined());
});
//# sourceMappingURL=extract.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const equal_1 = require("../../src/boolean/equal");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe("equal", function () {
    it("ordered", () => expect(equal_1.default([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBeTrue());
    it("unordered", () => expect(equal_1.default([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toBeTrue());
});
describe("not equal", function () {
    it("duplicate", () => expect(equal_1.default([1, 2, 3, 4, 5], [1, 2, 3, 4, 1])).toBeFalse());
    it("ordered missing", () => expect(equal_1.default([1, 2, 3, 4, 5], [1, 2, 3, 4])).toBeFalse());
});
//# sourceMappingURL=equal.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removes_values_1 = require("../dist/removes-values");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe("exists", function () {
    let array = [1, 2, 3, 1, 5];
    let removed = removes_values_1.default(array, [1, 5]);
    it("removed", () => expect([1, 1, 5]).toEqual(removed));
    it("original", () => expect([2, 3]).toEqual(array));
});
describe("limit", function () {
    let array = [1, 2, 3, 1, 5];
    let removed = removes_values_1.default(array, [1, 1], undefined, undefined, undefined, 2);
    it("removed", () => expect([1, 1]).toEqual(removed));
    it("original", () => expect([2, 3, 5]).toEqual(array));
});
//# sourceMappingURL=removes-values.spec.js.map
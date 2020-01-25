"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removes_value_1 = require("../dist/removes-value");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe("exists", function () {
    let array = [1, 2, 3, 1, 5];
    let removed = removes_value_1.default(array, 1);
    it("removed", () => expect([1, 1]).toEqual(removed));
    it("original", () => expect([2, 3, 5]).toEqual(array));
});
describe("limit", function () {
    let array = [1, 2, 3, 1, 5];
    let removed = removes_value_1.default(array, 1, undefined, undefined, undefined, 1);
    it("removed", () => expect([1]).toEqual(removed));
    it("original", () => expect([2, 3, 1, 5]).toEqual(array));
});
//# sourceMappingURL=removes-value.spec.js.map
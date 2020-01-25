"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const intersection_1 = require("../dist/intersection");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe("test 1", function () {
    let intersected = intersection_1.default(undefined, [1, 2], [3, 1], [2, 3, 1]);
    it("intersected", () => expect([1]).toEqual(intersected));
});
describe("test 2", function () {
    let intersected = intersection_1.default(undefined, [1, 2], [2, 3, 1], [2, 3, "1"]);
    it("intersected", () => expect([2]).toEqual(intersected));
});
//# sourceMappingURL=intersection.spec.js.map
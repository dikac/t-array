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
describe("test object", function () {
    let a = [{ number: 1 }, { number: 2 }];
    let b = [{ number: 2 }, { number: 3 }, { number: 1 }];
    let c = [{ number: 2 }, { number: 3 }, { number: 1 }];
    let intersected = intersection_1.default((v1, v2) => v1.number === v2.number, a, b, c);
    it("intersected", () => expect([a[0], a[1]]).toEqual(intersected));
});
//# sourceMappingURL=intersection.spec.js.map
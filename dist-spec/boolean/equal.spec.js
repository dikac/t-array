"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const equal_1 = require("../../dist/boolean/equal");
const shuffle_1 = require("../../dist/shuffle");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe("equal", function () {
    it("ordered", () => {
        let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(equal_1.default(data, data)).toBeTrue();
    });
    it("unordered", () => {
        let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(equal_1.default(shuffle_1.default(data), shuffle_1.default(data))).toBeTrue();
    });
});
describe("not equal", function () {
    it("duplicate", () => expect(equal_1.default([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 1])).toBeFalse());
    it("ordered missing", () => expect(equal_1.default([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBeFalse());
});
describe("equal object", function () {
    let data1 = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
    ];
    let data2 = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
    ];
    it("ordered", () => {
        expect(equal_1.default(data1, data2, (data1, data2) => data1.number === data2.number)).toBeTrue();
    });
    it("unordered", () => {
        expect(equal_1.default(shuffle_1.default(data1), shuffle_1.default(data2), (data1, data2) => data1.number === data2.number)).toBeTrue();
    });
});
describe("not equal object", function () {
    let data1 = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
    ];
    let data2 = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
    ];
    it("ordered", () => {
        expect(equal_1.default(data1, data2, (data1, data2) => data1.number === data2.number)).toBeFalse();
    });
    it("unordered", () => {
        expect(equal_1.default(shuffle_1.default(data1), shuffle_1.default(data2), (data1, data2) => data1.number === data2.number)).toBeFalse();
    });
});
//# sourceMappingURL=equal.spec.js.map
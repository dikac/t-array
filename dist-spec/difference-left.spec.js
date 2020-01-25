"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const difference_left_1 = require("../dist/difference-left");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe("primitive", function () {
    let target = [1, 2, 3, 4, 5];
    let compare = [2, 3, 4, 6];
    let left = difference_left_1.default(target, compare);
    it("left valid", () => expect(left).toEqual([1, 5]));
    let right = difference_left_1.default(compare, target);
    it("right valid", () => expect(right).toEqual([6]));
});
describe("custom comparison", function () {
    let target = [
        {
            string: new String('str1'),
            number: new Number(1),
            boolean: new Boolean(true),
        }, {
            string: new String('str2'),
            number: new Number(2),
            boolean: new Boolean(false),
        }, {
            string: new String('str3'),
            number: new Number(3),
            boolean: new Boolean(true),
        }
    ];
    let compare = [
        {
            string: new String('str2'),
            number: new Number(2),
            boolean: new Boolean(false),
        }, {
            string: new String('str4'),
            number: new Number(4),
            boolean: new Boolean(true),
        }
    ];
    it("left without", function () {
        let removed = difference_left_1.default(target, compare);
        expect(target).toEqual(removed);
    });
    it("left with", function () {
        let removed = difference_left_1.default(target, compare, (target, comparison) => target.string.toString() === comparison.string.toString());
        expect(target).not.toEqual(removed);
        expect(2).toBe(removed.length);
        expect(target[0]).toEqual(removed[0]);
        expect(target[2]).toEqual(removed[1]);
    });
    it("right without", function () {
        let removed = difference_left_1.default(compare, target);
        expect(compare).toEqual(removed);
    });
    it("right with", function () {
        let removed = difference_left_1.default(compare, target, (target, comparison) => target.string.toString() === comparison.string.toString());
        expect(target).not.toEqual(removed);
        expect(1).toBe(removed.length);
        expect(compare[1]).toEqual(removed[0]);
    });
});
//# sourceMappingURL=difference-left.spec.js.map
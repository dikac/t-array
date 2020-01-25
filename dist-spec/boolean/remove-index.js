"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remove_index_1 = require("../../dist/boolean/remove-index");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe("remove valid", function () {
    let target = [1, 2, 3, 4, 5];
    let result = remove_index_1.default(target, 2);
    it("compare result", () => { expect(result).toBeTrue(); });
    it("compare array", () => { expect(target).toEqual([1, 2, 4, 5]); });
});
describe("remove invalid", function () {
    let target = [1, 2, 3, 4, 5];
    let result = remove_index_1.default(target, 8);
    it("compare result", () => { expect(result).toBeFalse(); });
    it("compare array", () => { expect(target).toEqual([1, 2, 3, 4, 5]); });
});
describe("remove empty invalid", function () {
    let target = [];
    let result = remove_index_1.default(target, 8);
    it("compare result", () => { expect(result).toBeFalse(); });
    it("compare array", () => { expect(target).toEqual([]); });
});
//# sourceMappingURL=remove-index.js.map
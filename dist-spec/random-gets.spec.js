"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_gets_1 = require("../dist/random-gets");
it("force console log", () => { spyOn(console, 'log').and.callThrough(); });
describe("random", function () {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let value of random_gets_1.default(array)) {
        it(`value ${value}`, () => expect(array.includes(value)).toBeTrue());
    }
});
//# sourceMappingURL=random-gets.spec.js.map
import Empty from "../../dist/boolean/empty";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('check empty', () => {

    it(`empty`, () => {

        expect(Empty([], true)).toBe(true)
    });

    it(`not empty`, () => {

        expect(Empty([1], true)).toBe(false)
    });
})

describe('check not empty', () => {

    it(`empty`, () => {

        expect(Empty([], false)).toBe(false)
    });

    it(`not empty`, () => {

        expect(Empty([1], false)).toBe(true)
    });
})

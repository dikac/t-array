import ArrayOf from "../../dist/guard/array-of";
import GuardBoolean from "@dikac/t-boolean/boolean";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let argument : unknown[] = [true, false, true, false];

    if(ArrayOf(argument, GuardBoolean)) {

        let returns : boolean[] = argument;

    } else {

        // @ts-expect-error
        let returns : boolean[] = argument;
    }
});

it(`boolean/boolean`, () => {
    expect(ArrayOf([true, false, true, false], GuardBoolean)).toBeTrue();
});

it(`integer/boolean`, () => {
    expect(ArrayOf([1, 0, 2, 3], GuardBoolean)).toBeFalse();
});




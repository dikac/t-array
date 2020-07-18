import Values from "../../dist/boolean/guards";
import GuardBoolean from "@dikac/t-boolean/boolean";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let argument : unknown[] = [true, false, true, false];

    if(Values(argument, GuardBoolean)) {

        let returns : boolean[] = argument;

    } else {

        // @ts-expect-error
        let returns : boolean[] = argument;
    }
});

it(`boolean/boolean`, () => {
    expect(Values([true, false, true, false], GuardBoolean)).toBeTrue();
});

it(`integer/boolean`, () => {
    expect(Values([1, 0, 2, 3], GuardBoolean)).toBeFalse();
});




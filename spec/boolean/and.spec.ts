import DifferenceBoth from "../../dist/difference-both";
import RemoveIndex from "../../dist/boolean/remove-index";
import Equal from "../../dist/boolean/equal";
import Shuffle from "../../dist/shuffle";
import And from "../../dist/boolean/and";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("empty", function() {

    it("default true", () => {

        expect(And([], false)).toBeFalse();
    });

    it("default false", () => {

        expect(And([], true)).toBeTrue();
    });

});

describe("true", function() {

    it("default true", () => {

        expect(And([true, true, true], false)).toBeTrue();
    });

    it("default false", () => {

        expect(And([true, true, true], true)).toBeTrue();
    });

});

describe("false", function() {

    it("default true", () => {

        expect(And([false, false, false], false)).toBeFalse();
    });

    it("default false", () => {

        expect(And([false, false, false], true)).toBeFalse();
    });

});

describe("mixed", function() {

    it("default true", () => {

        expect(And([false, true, false], false)).toBeFalse();
    });

    it("default false", () => {

        expect(And([false, true, false], true)).toBeFalse();
    });

});

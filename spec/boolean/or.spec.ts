import DifferenceBoth from "../../dist/difference-both";
import RemoveIndex from "../../dist/boolean/remove-index";
import Equal from "../../dist/boolean/equal";
import Shuffle from "../../dist/shuffle";
import Or from "../../dist/boolean/or";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("empty", function() {

    it("default true", () => {

        expect(Or([], false)).toBeFalse();
    });

    it("default false", () => {

        expect(Or([], true)).toBeTrue();
    });

});

describe("true", function() {

    it("default true", () => {

        expect(Or([true, true, true], false)).toBeTrue();
    });

    it("default false", () => {

        expect(Or([true, true, true], true)).toBeTrue();
    });

});

describe("false", function() {

    it("default true", () => {

        expect(Or([false, false, false], false)).toBeFalse();
    });

    it("default false", () => {

        expect(Or([false, false, false], true)).toBeFalse();
    });

});

describe("mixed", function() {

    it("default true", () => {

        expect(Or([false, true, false], false)).toBeTrue();
    });

    it("default false", () => {

        expect(Or([false, true, false], true)).toBeTrue();
    });

});

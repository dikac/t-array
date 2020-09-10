import Message from "../../../dist/assert/string/array";
import Name from "@dikac/t-object/string/name";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('valid',() =>{

    it(`object`, () => {
        expect(Message(true, [] )).toBe(`type is array.`);
    });
    it(`not object`, () => {
        expect(Message(true, [] )).toBe(`type is array.`);
    });
});

describe('invalid',() =>{

    it(`object`, () => {
        expect(Message(false, [] )).toBe(`type must array, actual object.`);
    });

    it(`not object`, () => {
        expect(Message(false, [] )).toBe(`type must array, actual object.`);
    });
});

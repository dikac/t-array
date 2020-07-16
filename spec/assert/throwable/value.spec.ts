import Value from "../../../dist/assert/throwable/value";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        let throwable = Value(1, 'string');
        expect(throwable.message).toBe('index "1" value is not "string"');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Value(2, 'object');
        expect(throwable.message).toBe('index "2" value is not "object"');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('number',() =>{

    it(`positive`, () => {
        let throwable = Value(3, "type 1");
        expect(throwable.message).toBe('index "3" value is not "type 1"');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Value(4, 'type 2');
        expect(throwable.message).toBe('index "4" value is not "type 2"');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('float',() =>{

    it(`positive`, () => {
        let throwable = Value(5, "type 3");
        expect(throwable.message).toBe('index "5" value is not "type 3"');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Value(6, "type 4");
        expect(throwable.message).toBe('index "6" value is not "type 4"');
        expect(throwable).toBeInstanceOf(Error);
    });
});

it('nan',() =>{

    let throwable = Value(7, "type 5");
    expect(throwable.message).toBe('index "7" value is not "type 5"');
    expect(throwable).toBeInstanceOf(Error);
});

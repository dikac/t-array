import Number from "../../../dist/boolean/string/value";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Number(true, 0,'Infinity' )).toBe('index "0" value is "Infinity"');
        expect(Number(false, Infinity,'Infinity' )).toBe('index "Infinity" value is not "Infinity"');
    });

    it(`number`, () => {
        expect(Number(true, 2,'-Infinity')).toBe('index "2" value is "-Infinity"');
        expect(Number(false, 3,'-Infinity')).toBe('index "3" value is not "-Infinity"');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Number(true, 4,'1' )).toBe('index "4" value is "1"');
        expect(Number(false, 5,'1' )).toBe('index "5" value is not "1"');
    });

    it(`number`, () => {
        expect(Number(true, 6,'-1')).toBe('index "6" value is "-1"');
        expect(Number(false, 7,'-1')).toBe('index "7" value is not "-1"');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Number(true, 8,'1.1')).toBe('index "8" value is "1.1"');
        expect(Number(false, 9,'1.1')).toBe('index "9" value is not "1.1"');
    });

    it(`float`, () => {
        expect(Number(true, 10,'-1.1')).toBe('index "10" value is "-1.1"');
        expect(Number(false, 11,'-1.1')).toBe('index "11" value is not "-1.1"');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Number(true, 12,'NaN')).toBe('index "12" value is "NaN"');
        expect(Number(false, 13,'NaN')).toBe('index "13" value is not "NaN"');
    });

});

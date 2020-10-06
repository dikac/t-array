import Extract from "../../../dist/value/value/extract";
import FindFirst, {All} from "../../../dist/value/value/find-first";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("complete", function() {

    it('found', ()=>{

        let option = {
            value : ['ab', 'b', 'abc'],
            compare : 1,
            validation : (a:string, b:number)=>a.length === b,
            default : true
        };

        expect(FindFirst(option)).toBe('b');
    });

    it('not-found', ()=>{

        let option = {
            value : ['ab', 'abcd', 'abc'],
            compare : 1,
            validation : (a:string, b:number)=>a.length === b,
            default : true
        };

        expect(FindFirst(option)).toBe(true);
    });
});

describe("no default", function() {

    it('found', ()=>{

        let option = {
            value : ['ab', 'b', 'abc'],
            compare : 1,
            validation : (a:string, b:number)=>a.length === b,
        };

        expect(FindFirst(option)).toBe('b');
    });

    it('not-found', ()=>{

        let option = {
            value : ['ab', 'abcd', 'abc'],
            compare : 1,
            validation : (a:string, b:number)=>a.length === b,
        };

        expect(FindFirst(option)).toBe(undefined);
    });
});


describe("no validation", function() {

    it('found', ()=>{

        let option = {
            value : ['ab', 'b', 'abc'],
            compare : 'abc',
            default : true
        };

        expect(FindFirst(option)).toBe('abc');
    });

    it('not-found', ()=>{

        let option = {
            value : ['ab', 'abcd', 'abc'],
            compare : 'z',
            default : true
        };

        expect(FindFirst(option)).toBe(true);
    });
});


describe("no validation & default", function() {

    it('found', ()=>{

        let option = {
            value : ['ab', 'b', 'abc'],
            compare : 'abc',
        };

        expect(FindFirst(option)).toBe('abc');
    });

    it('not-found', ()=>{

        let option = {
            value : ['ab', 'abcd', 'abc'],
            compare : 'z',
        };

        expect(FindFirst(option)).toBe(undefined);
    });
});

import And from "../../dist/validatable/and";
import Guard from "@dikac/t-validatable/boolean/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Equal from "../../dist/boolean/equal";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('structure', function () {

    describe('subjects', function () {

        let subjects = [];
        let and = And<Validatable[]>(subjects, true);

        it("constructor", () => {
            expect(Equal(subjects, and)).toBeTrue();
        });

        it("value", () => {
            expect([...and.value]).toEqual([...subjects]);
        });

        it("set", () => {
            and.push({valid:false});
            expect(Equal(subjects, and)).toBeFalse();
            expect(and[0].valid).toBeFalse();
        });

        it("value", () => {
            expect(and.value).toEqual(and);
        });

    });

    describe('initial', function () {

        let initial = true;
        let and = And<Validatable[]>([], initial);

        it("constructor", () => {
            expect(initial === and.defaults).toBeTrue()
        });


        it("set", () => {
            let initial2 = false;
            and.defaults = initial2;
            expect(initial === and.defaults).toBeFalse();
            expect(initial2 === and.defaults).toBeTrue();
        });

    });

});

describe('empty', function () {

    describe('initial', function () {

        it("true", () => {
            let and = And<Validatable[]>([], true);
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            let and = And<Validatable[]>([], false);
            expect(and.valid).toBe(false)
        });

    });

    describe('set', function () {

        let and = And<Validatable[]>([], true);

        it("true", () => {
            and.defaults = true;
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            and.defaults = false;
            expect(and.valid).toBe(false)
        });

    });

});

describe("single", function() {

    describe('constructor', function () {

        it("true", () => {
            let and = And<Validatable[]>([{valid:true}], false);
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            let and = And<Validatable[]>([{valid:false}], true);
            expect(and.valid).toBe(false)
        });
    });

    describe('set', function () {

        let and = And<Validatable[]>([], true);

        it("true", () => {
            and.defaults = false;
            and.push({valid:true});
            expect(and.valid).toBe(true)
        });

        it("false", () => {
            and.defaults = true;
            and.push({valid:false});
            expect(and.valid).toBe(false)
        });

    });

});

describe("multi same", function() {

    let and = And<Validatable[]>([], false);

    it("valids", () => {
        and.defaults = false;
        and.push({valid:true}, {valid:true});
        expect(and.valid).toBe(true)
    });

    it('iterator', ()=>{

        let number = 0;

        for(let value of and) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    })

    it("invalids", () => {
        and.defaults = true;
        and.push({valid:false}, {valid:false});
        expect(and.valid).toBe(false)
    });

    it('iterator', ()=>{

        let number = 0;

        for(let value of and) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(4);

    })
})


describe("multi mixed", function() {

    let and = And<Validatable[]>([], false);

    it("valids", () => {
        and.defaults = true;
        and.push({valid:true}, {valid:false});
        expect(and.valid).toBe(false)
    });

    it('iterator', ()=>{

        let number = 0;

        for(let value of and) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(2);

    })

    it("invalids", () => {
        and.defaults = false;
        and.push({valid:true}, {valid:false});
        expect(and.valid).toBe(false)
    });

    it('iterator', ()=>{

        let number = 0;

        for(let value of and) {

            number++;
            expect(Guard(value)).toBeTrue();
        }

        expect(number).toBe(4);

    })
})

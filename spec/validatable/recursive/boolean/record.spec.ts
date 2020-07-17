import Type from "../../../../dist/validatable/recursive/boolean/record";
import Validatable from "@dikac/t-validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe('valid single dimension', function () {

    let record = [
        {valid:true},
        {valid:false},
    ];

    let object : any[] = record;

    it('check result', () => {

        let result = Type(object);
        expect(result).toBeTrue();
    })

    it('compiler pass', () => {

        if(Type<[Validatable, Validatable]>(object)) {

            expect(object[0].valid).toBeTrue();
            expect(object[1].valid).toBeFalse();

            // @ts-expect-error
            expect(object[2]).toBeUndefined();

        }
    })
});

describe('invalid single dimension', function () {

    let record = [
        {valid:true},
        {valid:false},
        1
    ];

    let object : object = record;

    it('check result', () => {

        let result = Type(object);
        expect(result).toBeFalse();
    })

});


describe('valid multi dimension', function () {


    let record = [
        {valid:true},
        {valid:false},
        [
            {valid:true},
            {valid:true},
        ],
        [
            {valid:false},
            {valid:false},
        ],
        [
            {valid:true},
            {valid:false},
        ]
    ];

    let object : object = record;


    it('valid', () => {

        let result = Type(object);
        expect(result).toBeTrue();
    })

    describe('compiler compatible', function () {

    it('implicit type', () => {

        if(Type<[Validatable, Validatable, [Validatable, Validatable], [Validatable, Validatable], [Validatable, Validatable]]>(object)) {

            expect(object[0].valid).toBeTrue();
            expect(object[1].valid).toBeFalse();

            expect(object[2][0].valid).toBeTrue();
            expect(object[2][1].valid).toBeTrue();

            expect(object[3][0].valid).toBeFalse();
            expect(object[3][1].valid).toBeFalse();

            expect(object[4][0].valid).toBeTrue();
            expect(object[4][1].valid).toBeFalse();

        }

    })
    it('explicit type', () => {

        if(Type<typeof record>(object)) {

            // not recognized on explicit conversion
            // @ts-expect-error
            expect(object[0].valid).toBeTrue();

            // not recognized on explicit conversion
            // @ts-expect-error
            expect(object[1].valid).toBeFalse();

            expect(object[2][0].valid).toBeTrue();
            expect(object[2][1].valid).toBeTrue();

            expect(object[3][0].valid).toBeFalse();
            expect(object[3][1].valid).toBeFalse();

            expect(object[4][0].valid).toBeTrue();
            expect(object[4][1].valid).toBeFalse();

        }
    })
    })
})

describe('invalid multi dimension', function () {


    let record = {
        valid :  {valid:true},
        invalid : {valid:false},
        valids : {
            valid1 :  {valid:true},
            valid2 : {valid:true},
        },
        invalids : {
            invalid1 : {valid:false},
            invalid2 : {valid:false},
        },
        mixed : {
            valid :  {valid:true},
            invalid : {valid:false},
            wrong : 2
        }
    };

    let object : object = record;



    it('valid', () => {

        let result = Type(object);
        expect(result).toBeFalse();
    })


})

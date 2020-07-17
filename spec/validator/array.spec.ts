import Validator from "./factory";
import Array from "../../dist/validator/array";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = [
        new Validator('string'),
        new Validator('string'),
    ];

    let property = new Array(validator);
    let value = [
        'name',
        'address',
    ]

    let validatable = property.validate(value);


    it(`valid`, () => {

        expect(validatable[0].valid).toBe(true);
        expect(validatable[0].valid).toBe(true);
        expect(validatable[1].valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable[0].message).toBe('name valid');
        expect(validatable[1].message).toBe('address valid');
    });


});


describe("deep", function() {

    let validator = [
        new Validator('string'),
        new Validator('string'),
    ];

    let property = new Array(validator);

    let validatable = property.validate([
        'name',
        'address',
    ]);

    it(`valid`, () => {

        expect(validatable[0].valid).toBe(true);

        expect(validatable[0].valid).toBe(true);
        expect(validatable[1].valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable[0].message).toBe('name valid');
        expect(validatable[1].message).toBe('address valid');
    });


});




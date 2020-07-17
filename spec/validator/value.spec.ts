import Validator from "./factory";
import Value from "../../dist/validator/value";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    let validator = [
        new Validator('string'),
        new Validator('string'),
    ];

    let property = new Value(validator);
    let value = 'name';

    let validatable = property.validate(value);


    it(`valid`, () => {

        expect(validatable[0].valid).toBe(true);
        expect(validatable[1].valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable[0].message).toBe('name valid');
        expect(validatable[1].message).toBe('name valid');
    });


});


describe("deep", function() {

    let validator = [
        new Validator('string'),
        new Validator('string'),
    ];

    let property = new Value(validator);

    let validatable = property.validate('name');

    it(`valid`, () => {

        expect(validatable[0].valid).toBe(true);
        expect(validatable[1].valid).toBe(true);
    });

    it(`message equal`, () => {

        expect(validatable[0].message).toBe('name valid');
        expect(validatable[1].message).toBe('name valid');
    });


});




import Validator from "../../validator/factory";
import Value from "../../../dist/list/validator/value";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("flat", function() {

    describe("valids", function() {

        let validator = [
            new Validator('string'),
            new Validator('string'),
        ];

        let property = new Value(validator);
        let value = 'name';

        let validatable = property.validate(value);


        it(`valid`, () => {
                expect(validatable.valid).toBe(true);
        });

        it(`items`, () => {

            expect(validatable[0].valid).toBe(true);
            expect(validatable[1].valid).toBe(true);
        });

        it(`message equal`, () => {

            expect(validatable[0].message).toBe('name valid');
            expect(validatable[1].message).toBe('name valid');
        });
    });


    describe("invalids", function() {

        let validator = [
            new Validator('number'),
            new Validator('number'),
        ];

        let property = new Value(validator);
        let value = 'name';

        let validatable = property.validate(value);

        it(`valid`, () => {
            expect(validatable.valid).toBe(false);
        });

        it(`items`, () => {

            expect(validatable[0].valid).toBe(false);
            expect(validatable[1].valid).toBe(false);
        });

        it(`message equal`, () => {

            expect(validatable[0].message).toBe('name invalid');
            expect(validatable[1].message).toBe('name invalid');
        });

    });

    describe("mixed", function() {

        let validator = [
            new Validator('string'),
            new Validator('number'),
        ];

        let property = new Value(validator);
        let value = 'name';

        let validatable = property.validate(value);

        it(`valid`, () => {
            expect(validatable.valid).toBe(false);
        });

        it(`items`, () => {

            expect(validatable[0].valid).toBe(true);
            expect(validatable[1].valid).toBe(false);
        });

        it(`message equal`, () => {

            expect(validatable[0].message).toBe('name valid');
            expect(validatable[1].message).toBe('name invalid');
        });

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




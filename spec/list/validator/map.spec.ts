import Validator from "../../validator/factory";
import Map from "../../../dist/list/validator/map";
import And from "../../../dist/list/validatable/and";
import Or from "../../../dist/list/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";
import Validatables from "../../../dist/list/validatables/validatables";
import ValidatablesInterface from "../../../dist/list/validatables/validatables";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {


    describe("implicit partial", function() {

        let validator = [
            new Validator('string'),
            new Validator('string'),
        ];

        let value = [
            'name',
            'address',
        ];

        let property = new Map(validator, (v)=>And(<Validatable[]>v));

        let validatable = property.validate(value);

        let key : Validatable;
        // @ts-expect-error
        key = validatable.validatables[0];
        // @ts-expect-error
        key = validatable.validatables[1];
        // @ts-expect-error
        key = validatable.validatables[2];

        // @ts-expect-error
        let validatables : ValidatablesInterface = validatable;

        // @ts-expect-error
        let record : Validatable[] = validatable.validatables;

        // @ts-expect-error
        let validatable1 : Validatables = validatable;

        let unknown : unknown = validatable.value;

        // @ts-expect-error
        let string : Type = validatable.value;

    });

    describe("explicit complete", function() {


        type TypeValidator = [
            ValidatorInterface<string, Validatable & Message<string>>,
            ValidatorInterface<string, Validatable & Message<string>>,
        ];

        let validator : TypeValidator = [
            new Validator('string'),
            new Validator('string'),
        ];

        type Type = [
            string,
            string,
        ];

        let value : Type = [
            'name',
            'address',
        ];

        describe("auto", function() {

            let property = new Map(validator, (v)=>And(<Validatable[]>v));

            let validatable = property.validate(value);

            let key : Validatable;
            // @ts-expect-error
            key = validatable.validatables[0];
            // @ts-expect-error
            key = validatable.validatables[1];
            // @ts-expect-error
            key = validatable.validatables[2];

            // @ts-expect-error
            let validatables : ValidatablesInterface = validatable;

            // @ts-expect-error
            let record : Validatable[] = validatable.validatables;

            // @ts-expect-error
            let validatable1 : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;

        });

        describe("direct", function() {

            let property = new Map<TypeValidator>(validator, (v)=>And(<Validatable[]>v));

            let validatable = property.validate(value);


            let key : Validatable;
            // @ts-expect-error
            key = validatable.validatables[0];
            // @ts-expect-error
            key = validatable.validatables[1];
            // @ts-expect-error
            key = validatable.validatables[2];

            // @ts-expect-error
            let validatables : ValidatablesInterface = validatable;

            // @ts-expect-error
            let record : Validatable[] = validatable.validatables;

            // @ts-expect-error
            let validatable1 : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;
        });
    });
});




describe("all valid", function() {

    let validator = [
        new Validator('string'),
        new Validator('string'),
        new Validator('string'),
    ];

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = new Map(validator,(v)=>And(<Validatable[]>v));
        let validatable = property.validate(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(validatable.validatables[0].message).toBe('user valid');
        } else {
            fail('index 0 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(true);
            expect(validatable.validatables[1].message).toBe('name valid');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(true);
            expect(validatable.validatables[2].message).toBe('address valid');
        } else {
            fail('index 2 should exits')
        }
    });

    it(`check handler and`, () => {

        let property = new Map(validator,(v)=>And(<Validatable[]>v));
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

    it(`check handler or`, () => {

        let property = new Map(validator,(v)=>Or(<Validatable[]>v));
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

});

describe("mixed", function() {

    let validator = [
        new Validator('string'),
        new Validator('number'),
        new Validator('string'),
    ];

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = new Map(validator,(v)=>And(<Validatable[]>v));
        let validatable = property.validate(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(validatable.validatables[0].message).toBe('user valid');
        } else {
            fail('index 0 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(false);
            expect(validatable.validatables[1].message).toBe('name invalid');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            fail('index 2 should not exits')
        }
    });

    it(`check handler and`, () => {

        let property = new Map(validator,(v)=>And(<Validatable[]>v));
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

    it(`check handler or`, () => {

        let property = new Map(validator,(v)=>Or(<Validatable[]>v));
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

});

describe("all invalid", function() {

    let validator = [
        new Validator('number'),
        new Validator('number'),
        new Validator('number'),
    ];

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = new Map(validator,(v)=>And(<Validatable[]>v));
        let validatable = property.validate(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(false);
            expect(validatable.validatables[0].message).toBe('user invalid');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            fail('index 2 should not exits')
        }

        if(validatable.validatables[2]) {
            fail('index 3 should not exits')
        }
    });

    it(`check handler and`, () => {

        let property = new Map(validator,(v)=>And(<Validatable[]>v));
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

    it(`check handler or`, () => {

        let property = new Map(validator,(v)=>Or(<Validatable[]>v));
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

});

import Validator from "../../validator/factory";
import Value from "../../../dist/list/validator/value";
import ValidateValue from "../../../dist/validatable/list/value";
import And from "../../../dist/list/validatable/and";
import Or from "../../../dist/list/validatable/or";
import ValidatablesInterface from "../../../dist/list/validatables/validatables";
import Validatables from "../../../dist/list/validatables/validatables";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("explicit type", function() {

        type TypeValidator = [
            ValidatorInterface<string, Validatable & Message<string>>,
            ValidatorInterface<string, Validatable & Message<string>>,
        ];

        let validator : TypeValidator = [
            new Validator('string'),
            new Validator('string'),
        ];

        describe("complete", function() {

            let property = new Value<string, TypeValidator>(validator, (v)=>And(<Validatable[]>v));

            let validatable = property.validate('data');

            let key : Validatable = validatable[0];

            // @ts-expect-error
            let validatables : ValidatablesInterface = validatable;

            // @ts-expect-error
            let record : Validatable[] = validatable.validatables;

            // @ts-expect-error
            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });

        describe("auto", function() {

            let property = new Value(validator, (v)=>And(<Validatable[]>v));

            let validatable = property.validate('data');

            let key : Validatable = validatable[0];

            // @ts-expect-error
            let validatables : ValidatablesInterface = validatable;

            // @ts-expect-error
            let record : Validatable[] = validatable.validatables;

            // @ts-expect-error
            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            // @ts-expect-error
            let string : string = validatable.value;

        });
    });

    describe("implicit type", function() {

        let validator  = [
            new Validator('string'),
            new Validator('string'),
        ];

        describe("complete", function() {

            let property = new Value<string>(validator, (v)=>And(<Validatable[]>v));

            let validatable = property.validate('data');

            let key : Validatable = validatable[0];

            // @ts-expect-error
            let validatables : ValidatablesInterface = validatable;

            // @ts-expect-error
            let record : Validatable[] = validatable.validatables;

            // @ts-expect-error
            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });

        describe("auto", function() {

            let property = new Value(validator, (v)=>And(<Validatable[]>v));

            let validatable = property.validate('data');

            let key : Validatable = validatable[0];

            // @ts-expect-error
            let validatables : ValidatablesInterface = validatable;

            // @ts-expect-error
            let record : Validatable[] = validatable.validatables;

            // @ts-expect-error
            let and : Validatables = validatable;

            let unknown : unknown = validatable.value;

            // @ts-expect-error
            let string : string = validatable.value;

        });
    });
});


describe("all valid", function() {


    let validator  = [
        new Validator('string'),
        new Validator('string'),
        new Validator('string'),
    ];

    describe("complete", function() {

        let property = new Value(validator, (v)=>And(<Validatable[]>v));

        let validatable = property.validate('data');

        it('value', ()=>{
            expect(validatable.value).toBe('data');
            expect(validatable.valid).toBe(true);
        });

        it('index 0', ()=>{

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('data valid');

            } else {

                fail('index 0 should exits')
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('data valid');

            } else {

                fail('index 1 should exits')
            }
        });

        it('index 2', ()=>{

            if(validatable.validatables[2]) {

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('data valid');

            } else {

                fail('index 2 should exits')
            }
        });

    });

});


describe("mixed", function() {


    let validator  = [
        new Validator('string'),
        new Validator('number'),
        new Validator('string'),
    ];

    describe("complete", function() {

        let property = new Value(validator, (v)=>And(<Validatable[]>v));

        let validatable = property.validate('data');

        it('value', ()=>{
            expect(validatable.value).toBe('data');
            expect(validatable.valid).toBe(false);
        });

        it('index 0', ()=>{

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('data valid');

            } else {

                fail('index 0 should exits')
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(false);
                expect(validatable.validatables[1].message).toBe('data invalid');

            } else {

                fail('index 1 should exits')
            }
        });

        it('index 2', ()=>{

            if(validatable.validatables[2]) {

                fail('index 2 should not exits')
            }
        });

    });

});

describe("all invalid", function() {

    let validator  = [
        new Validator('number'),
        new Validator('number'),
        new Validator('number'),
    ];

    let property = new Value(validator, (v)=>And(<Validatable[]>v));

    let validatable = property.validate('data');

    it('value', ()=>{
        expect(validatable.value).toBe('data');
        expect(validatable.valid).toBe(false);
    });

    it('index 0', ()=>{

        if(validatable.validatables[0]) {

            expect(validatable.validatables[0].valid).toBe(false);
            expect(validatable.validatables[0].message).toBe('data invalid');

        } else {

            fail('index 0 should exits')
        }
    });

    it('index 1', ()=>{

        if(validatable.validatables[1]) {
            fail('index 1 should exits')
        }
    });

    it('index 2', ()=>{
        if(validatable.validatables[2]) {
            fail('index 2 should not exits')
        }
    });
});



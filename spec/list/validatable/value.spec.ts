import Validator from "../../validator/factory";
import Value from "../../../dist/list/validatable/value";
import ValidateValue from "../../../dist/validatable/list/value";
import And from "../../../dist/list/validatable/and";
import Or from "../../../dist/list/validatable/or";
import Validatables from "../../../dist/list/validatable/validatables";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    let validator = [
        new Validator('string'),
        new Validator('string'),
    ];

    describe("implicit complete", function() {

        let validatable = new Value('data', validator, (value, validators) => ValidateValue(value, validators, false), And);

        let key : Validatable = validatable[0];


        let list : Validatable[] = validatable.validatables;
        let and : Validatables = validatable.validatable;

        let unknown : unknown = validatable.value;

        let string : string = validatable.value;

    });

    describe("explicit complete", function() {

        let validatable = new Value<string, ValidatorInterface<string, ValidatableInterface & Message<string>>[], ValidatableInterface[], ValidatableInterface>
        ('data', validator, (value, validators) => ValidateValue(value, validators, false), And);

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    });

    describe("implicit partial", function() {

        let validatable = new Value('data', validator,
            (value, validators) => <(ValidatableInterface & Message<string>)[]> ValidateValue(value, validators, true),
            (v)=>And(<Validatable[]>v)
        );

        let unknown : unknown = validatable.value;

        let string : string = validatable.value;

    });

    describe("explicit complete", function() {

        let validatable = new Value<string, ValidatorInterface<string, ValidatableInterface & Message<string>>[], ValidatableInterface[], ValidatableInterface>
        ('data', validator,
            (value, validators) => <(ValidatableInterface & Message<string>)[]> ValidateValue(value, validators, true),
            And
        );

        let unknown : unknown = validatable.value;
        let string : string = validatable.value;

    });
});


describe("implicit complete", function() {

    describe("all valid", function() {

        let validator = [
            new Validator('string'),
            new Validator('string'),
            new Validator('string'),
        ];

        let value = 'data';

        it(`and validation`, () => {

            let validatable = new Value(value, validator,
                (value, validators) => ValidateValue(value, validators, false),
                And
            );

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables[0].valid).toBe(true);
            expect(validatable.validatables[0].message).toBe('data valid');

            expect(validatable.validatables[1].valid).toBe(true);
            expect(validatable.validatables[1].message).toBe('data valid');

            expect(validatable.validatables[2].valid).toBe(true);
            expect(validatable.validatables[2].message).toBe('data valid');
        });


        it(`or validation`, () => {

            let validatable = new Value(value, validator,
                (value, validators) => ValidateValue(value, validators, false),
                Or
            );

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            expect(validatable.validatables[0].valid).toBe(true);
            expect(validatable.validatables[0].message).toBe('data valid');

            expect(validatable.validatables[1].valid).toBe(true);
            expect(validatable.validatables[1].message).toBe('data valid');

            expect(validatable.validatables[2].valid).toBe(true);
            expect(validatable.validatables[2].message).toBe('data valid');
        });

    });


    describe("mixed", function() {

        let value = 'data';

        let validator = [
            new Validator('string'),
            new Validator('number'),
            new Validator('string'),
        ];

        it(`and validation`, () => {

            let and = new Value(value, validator,
                (value, validators) => ValidateValue(value, validators, false),
                And
            );

            expect(and.valid).toBe(false);

            expect(and.validatables[0].valid).toBe(true);
            expect(and.validatables[0].message).toBe('data valid');

            expect(and.validatables[1].valid).toBe(false);
            expect(and.validatables[1].message).toBe('data invalid');

            expect(and.validatables[2].valid).toBe(true);
            expect(and.validatables[2].message).toBe('data valid');

            expect(and.value).toBe('data');
        });


        it(`or validation `, () => {

            let or = new Value(value, validator,
                (value, validators) => ValidateValue(value, validators, false),
                Or
            );

            expect(or.valid).toBe(true);
            expect(or.value).toBe('data');

            expect(or.validatables[0].message).toBe('data valid');
            expect(or.validatables[0].valid).toBe(true);

            expect(or.validatables[1].message).toBe('data invalid');
            expect(or.validatables[1].valid).toBe(false);

            expect(or.validatables[2].message).toBe('data valid');
            expect(or.validatables[2].valid).toBe(true);

        });
    });


    describe("all invalid", function() {

        let value = {};

        let validator = [
            new Validator('string'),
            new Validator('number'),
            new Validator('string'),
        ];

        let and = new Value(value, validator,
            (value, validators) => ValidateValue(value, validators, false),
            And
        );

        it(`and validation`, () => {

            expect(and.valid).toBe(false);
            expect(and.value).toEqual({});

            expect(and.validatables[0].valid).toBe(false);
            expect(and.validatables[0].message).toBe('[object Object] invalid');

            expect(and.validatables[1].valid).toBe(false);
            expect(and.validatables[1].message).toBe('[object Object] invalid');

            expect(and.validatables[2].valid).toBe(false);
            expect(and.validatables[2].message).toBe('[object Object] invalid');
        });

        it(`or validation `, () => {

            let or = new Value(value, validator,
                (value, validators) => ValidateValue(value, validators, false),
                Or
            );

            expect(or.valid).toBe(false);
            expect(or.value).toEqual({});

            expect(or.validatables[0].message).toBe('[object Object] invalid');
            expect(or.validatables[0].valid).toBe(false);

            expect(or.validatables[1].message).toBe('[object Object] invalid');
            expect(or.validatables[1].valid).toBe(false);

            expect(or.validatables[2].message).toBe('[object Object] invalid');
            expect(or.validatables[2].valid).toBe(false);
        });
    });
});


describe("implicit incomplete", function() {

    describe("all valid", function() {

        let validator = [
            new Validator('string'),
            new Validator('string'),
            new Validator('string'),
        ];

        let value = 'data';

        it(`and validation`, () => {

            let validatable = new Value(value, validator,
                (value, validators) => <(ValidatableInterface & Message<string>)[]>ValidateValue(value, validators, true),
                And
            );

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('data valid');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('data valid');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables[2]) {

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('data valid');

            } else {

                fail('validatable.validatables.user should exist');
            }
        });


        it(`or validation`, () => {

            let validatable = new Value(value, validator,
                (value, validators) => <(ValidatableInterface & Message<string>)[]>ValidateValue(value, validators, true),
                Or
            );

            expect(validatable.valid).toBe(true);
            expect(validatable.value).toBe(value);

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('data valid');

            } else {

                fail('validatable.validatables.name should exist');
            }


            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('data valid');

            } else {

                fail('validatable.validatables.address should exist');
            }


            if(validatable.validatables[2]) {

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('data valid');

            } else {

                fail('validatable.validatables.user should exist');
            }
        });
    });


    describe("mixed", function() {

        let validator = [
            new Validator('string'),
            new Validator('number'),
            new Validator('string'),
        ];

        it(`and validation`, () => {

            let and = new Value('data', validator,
                (value, validators) => <(ValidatableInterface & Message<string>)[]> ValidateValue(value, validators, true),
                And
            );

            expect(and.valid).toBe(false);
            expect(and.value).toBe('data');

            if(and.validatables[0]) {
                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message).toBe('data valid');

            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables[1]) {
                expect(and.validatables[1].valid).toBe(false);
                expect(and.validatables[1].message).toBe('data invalid');

            } else {
                fail('validatable.validatables.age should exist');
            }

            if(and.validatables[2]) {
                fail('validatable.validatables.address should exist');
            }
        });


        it(`or validation `, () => {

            let or = new Value('data', validator,
                (value, validators) => <(ValidatableInterface & Message<string>)[]> ValidateValue(value, validators, true),
                Or
            );

            expect(or.value).toBe('data');
            expect(or.valid).toBe(true);

            if(or.validatables[0]) {
                expect(or.validatables[0].message).toBe('data valid');
                expect(or.validatables[0].valid).toBe(true);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables[1]) {
                expect(or.validatables[1].message).toBe('data invalid');
                expect(or.validatables[1].valid).toBe(false);
            } else {
                fail('validatable.validatables.age should exist');
            }

            if(or.validatables[2]) {
                fail('validatable.validatables.address should exist');
            }
        });
    });

    describe("all invalid", function() {

        let validator = [
            new Validator('string'),
            new Validator('number'),
            new Validator('string'),
        ];

        it(`and validation`, () => {

            let and = new Value({}, validator,
                (value, validators) => <(ValidatableInterface & Message<string>)[]> ValidateValue(value, validators, true),
                And
            );

            expect(and.valid).toBe(false);
            expect(and.value).toEqual({});

            if(and.validatables[0]) {
                expect(and.validatables[0].valid).toBe(false);
                expect(and.validatables[0].message).toBe('[object Object] invalid');
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(and.validatables[1]) {
                fail('validatable.validatables.age should not exist');
            }

            if(and.validatables[2]) {
                fail('validatable.validatables.address should not exist');
            }
        });

        it(`or validation `, () => {

            let or = new Value({}, validator,
                (value, validators) => <(ValidatableInterface & Message<string>)[]> ValidateValue(value, validators, true),
                Or
            );

            expect(or.value).toEqual({});
            expect(or.valid).toBe(false);

            if(or.validatables[0]) {
                expect(or.validatables[0].message).toBe('[object Object] invalid');
                expect(or.validatables[0].valid).toBe(false);
            } else {
                fail('validatable.validatables.name should exist');
            }

            if(or.validatables[1]) {
                fail('validatable.validatables.age should not exist');
            }

            if(or.validatables[2]) {
                fail('validatable.validatables.address should not exist');
            }

        });
    });
});


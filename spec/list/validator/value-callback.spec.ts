import Validator from "../../validator/factory";
import ValidatableFactory from "../../validatable/factory";
import Map from "../../../dist/list/validator/value-callback";
import ValidateValue from "../../../dist/validatable/list/value";
import And from "../../../dist/list/validatable/and";
import Or from "../../../dist/list/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import Message from "@dikac/t-message/message";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("explicit typed", function() {

        type TypeValidator = [
            ValidatorInterface<string, Validatable & Message<string>>,
            ValidatorInterface<string, Validatable & Message<string>>,
        ];


        let validators : TypeValidator = [
            new Validator('string'),
            new Validator('string'),
        ];

        let value : string = 'name';

        describe("auto", function() {

            let validator = new Map(validators,
                (value, validators) => ValidateValue(value, validators, false),
                And
            );

            let validatable = validator.validate(value);

            let unknown : unknown = validatable.value;

            // @ts-expect-error
            let record : string = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            // @ts-expect-error
            instance = validatable.validatables[3];
            // @ts-expect-error
            instance = validatable.validatables[4];
        });

        describe("auto partial", function() {

            let validator = new Map(validators,
                (value, validators) => <[Validatable & Message<string>, Validatable & Message<string>]>ValidateValue(value, validators, true),
                And
            );

            let validatable = validator.validate(value);

            let unknown : unknown = validatable.value;
            // @ts-expect-error
            let string : string = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
              // @ts-expect-error
            instance = validatable.validatables[3];
              // @ts-expect-error
            instance = validatable.validatables[4];
        });
    });


    describe("explicit typed", function() {

        let validators  = [
            new Validator('string'),
            new Validator('string'),
        ];

        let value  = 'name';


        describe("auto", function() {

            let validator = new Map(validators,
                (value, validators) => ValidateValue(value, validators, false),
                And
            );

            let validatable = validator.validate(value);

            let unknown : unknown = validatable.value;

            // @ts-ignore
            let value1 : string[] = validatable.value;

            // @ts-ignore
            let value2 : string = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });

        describe("auto partial", function() {

            let validator = new Map(validators,
                (value, validators) => <[ValidatableFactory, ValidatableFactory]>ValidateValue(value, validators, true),
                And
            );
            let validatable = validator.validate(value);

            let unknown : unknown = validatable.value;

            // @ts-ignore
            let value1 : string[] = validatable.value;

            // @ts-ignore
            let value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            // @ts-ignore
            instance = validatable.validatables[3];
            // @ts-ignore
            instance = validatable.validatables[4];
        });
    });

});



describe("explicit", function() {

    describe("all valid", function() {

        type TypeValidator = [
            ValidatorInterface<string, Validatable & Message<string>>,
            ValidatorInterface<string, Validatable & Message<string>>,
            ValidatorInterface<string, Validatable & Message<string>>,
        ];

        let validators : TypeValidator = [
            new Validator('string'),
            new Validator('string'),
            new Validator('string'),
        ];

        let value : string = 'user';

        describe("complete", function() {

            it(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    And
                );
                let validatable = validator.validate(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('user valid');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('user valid');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('user valid');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    Or
                );

                let validatable = validator.validate(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('user valid');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('user valid');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('user valid');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

        });

        describe("partial", function() {

            it(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) =>  <[Validatable & Message<string>, Validatable & Message<string>, Validatable & Message<string>]>ValidateValue(value, validators, true),
                    And
                );

                let validatable = validator.validate(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('user valid');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('user valid');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('user valid');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validator = new Map(validators,
                    (value, validators) =>  <[Validatable & Message<string>, Validatable & Message<string>, Validatable & Message<string>]>ValidateValue(value, validators, true),
                    Or
                );

                let validatable = validator.validate(value);

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('user valid');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('user valid');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('user valid');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });
        });

    });

    describe("mixed", function() {


        type TypeValidator = [
            ValidatorInterface<string, Validatable & Message<string>>,
            ValidatorInterface<string, Validatable & Message<string>>,
            ValidatorInterface<string, Validatable & Message<string>>,
        ];

        let validators : TypeValidator= [
            new Validator('string'),
            new Validator('number'),
            new Validator('string'),
        ];

        let value : string = 'name';

        describe("complete", function() {

            it(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>And(v)
                );

                let and = validator.validate(value);

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message).toBe('name valid');

                expect(and.validatables[1].valid).toBe(false);
                expect(and.validatables[1].message).toBe('name invalid');

                expect(and.validatables[2].valid).toBe(true);
                expect(and.validatables[2].message).toBe('name valid');

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });


            it(`or validation `, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>Or(v)
                );

                let or = validator.validate(value);

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message).toBe('name valid');
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message).toBe('name invalid');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2].message).toBe('name valid');
                expect(or.validatables[2].valid).toBe(true);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);

            });
        });


        describe("partial", function() {

            it(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) =>  <[Validatable & Message<string>, Validatable & Message<string>, Validatable & Message<string>]>ValidateValue(value, validators, true),
                    (v)=>And(v)
                );

                let and = validator.validate(value);

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message).toBe('name valid');

                expect(and.validatables[1].valid).toBe(false);
                expect(and.validatables[1].message).toBe('name invalid');

                expect(and.validatables[2]).toBe(<any>undefined);

                // @ts-expect-error
                expect(and.validatables[3]).toBe(<any>undefined);
            });


            it(`or validation `, () => {

                let validator = new Map(validators,
                    (value, validators) =>  <[Validatable & Message<string>, Validatable & Message<string>, Validatable & Message<string>]>ValidateValue(value, validators, true),
                    (v)=>Or(v)
                );

                let or = validator.validate(value);

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message).toBe('name valid');
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message).toBe('name invalid');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2]).toBe(<any>undefined);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(<any>undefined);

            });
        });
    });

    describe("all invalid", function() {

        type TypeValidator = [
            ValidatorInterface<any, Validatable & Message<string>>,
            ValidatorInterface<any, Validatable & Message<string>>,
            ValidatorInterface<any, Validatable & Message<string>>,
        ];

        let validators : TypeValidator = [
            new Validator('string'),
            new Validator('number'),
            new Validator('string'),
        ];

        let value : object = {};

        describe("complete", function() {
            it(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>And(v)
                );

                let and = validator.validate(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].message).toBe('[object Object] invalid');
                expect(and.validatables[0].valid).toBe(false);

                expect(and.validatables[1].message).toBe('[object Object] invalid');
                expect(and.validatables[1].valid).toBe(false);

                expect(and.validatables[2].message).toBe('[object Object] invalid');
                expect(and.validatables[2].valid).toBe(false);

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });

            it(`or validation `, () => {

                let validator = new Map(validators,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>Or(v)
                );

                let or = validator.validate(value);

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(or.validatables[0].message).toBe('[object Object] invalid');
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1].message).toBe('[object Object] invalid');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2].message).toBe('[object Object] invalid');
                expect(or.validatables[2].valid).toBe(false);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);
            });
        });


        describe("partial", function() {
            it(`and validation`, () => {

                let validator = new Map(validators,
                    (value, validators) => <[Validatable & Message<string>, Validatable & Message<string>, Validatable & Message<string>]>ValidateValue(value, validators, true),
                    (v)=>And(v)
                );
                let and = validator.validate(value);

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(false);
                expect(and.validatables[0].message).toBe('[object Object] invalid');

                expect(and.validatables[1]).toBe(<any>undefined);
                expect(and.validatables[2]).toBe(<any>undefined);
                // @ts-expect-error
                expect(and.validatables[3]).toBe(<any>undefined);
            });

            it(`or validation `, () => {

                let validator = new Map(validators,
                    (value, validators) => <[Validatable & Message<string>, Validatable & Message<string>, Validatable & Message<string>]>ValidateValue(value, validators, true),
                    (v)=>Or(v)
                );
                let or = validator.validate(value);

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(or.validatables[0].message).toBe('[object Object] invalid');
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1]).toBe(<any>undefined);
                expect(or.validatables[2]).toBe(<any>undefined);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(<any>undefined);
            });
        });
    });
});

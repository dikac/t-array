import Validator from "../../validator/factory";
import Map from "../../../dist/list/validatable/map-callback";
import ValidateValue from "../../../dist/validatable/list/map-standard";
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

        type Type = [
            string,
            string,
        ];

        let validator : TypeValidator = [
            new Validator('string'),
            new Validator('string'),
        ];

        let value : Type = [
            'name',
            'address',
        ];

        describe("auto", function() {

            let validatable = new Map(value, validator,
                (value, validators) => ValidateValue(value, validators, false),
                And
            );

            let unknown : unknown = validatable.value;

            let record : Type = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            // @ts-expect-error
            instance = validatable.validatables[3];
            // @ts-expect-error
            instance = validatable.validatables[4];
        });

        describe("auto partial", function() {

            let validatable = new Map(value, validator,
                (value, validators) => <(Validatable & Message<string>)[]>ValidateValue(value, validators, true),
                And
            );

            let unknown : unknown = validatable.value;
            let string : Type = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });
    });


    describe("explicit typed", function() {

        let validator  = [
            new Validator('string'),
            new Validator('string'),
        ];

        let value  = [
            'name',
            'address',
        ];


        describe("auto", function() {

            let validatable = new Map(value, validator,
                (value, validators) => ValidateValue(value, validators, false),
                And
            );

            let unknown : unknown = validatable.value;

            // @ts-ignore
            let value1 : string[] = validatable.value;

            // @ts-ignore
            let value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });

        describe("auto partial", function() {

            let validatable = new Map(value, validator,
                (value, validators) => <(Validatable & Message<string>)[]>ValidateValue(value, validators, true),
                And
            );

            let unknown : unknown = validatable.value;

            // @ts-ignore
            let value1 : string[] = validatable.value;

            // @ts-ignore
            let value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
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

        type Type = [
            string,
            string,
            string,
        ]

        let validator : TypeValidator = [
            new Validator('string'),
            new Validator('string'),
            new Validator('string'),
        ];

        let value : Type = [
            'user',
            'name',
            'address',
        ];

        describe("complete", function() {

            it(`and validation`, () => {

                let validatable = new Map(value, validator,
                    (value, validators) => ValidateValue(value, validators, false),
                    And
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('user valid');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('name valid');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('address valid');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validatable = new Map(value, validator,
                    (value, validators) => ValidateValue(value, validators, false),
                    Or
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('user valid');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('name valid');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('address valid');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

        });

        describe("partial", function() {

            it(`and validation`, () => {

                let validatable = new Map(value, validator,
                    (value, validators) => <(Validatable & Message<string>)[]>ValidateValue(value, validators, true),
                    And
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('user valid');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('name valid');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('address valid');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validatable = new Map(value, validator,
                    (value, validators) => <(Validatable & Message<string>)[]>ValidateValue(value, validators, true),
                    Or
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('user valid');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('name valid');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('address valid');

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

        type Type = [
            string,
            string,
            string,
        ]

        let validator : TypeValidator= [
            new Validator('string'),
            new Validator('number'),
            new Validator('string'),
        ];

        let value : Type = [
            "11",
            'name',
            'address',
        ];

        describe("complete", function() {

            it(`and validation`, () => {

                let and = new Map(value, validator,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>And(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message).toBe('11 valid');

                expect(and.validatables[1].valid).toBe(false);
                expect(and.validatables[1].message).toBe('name invalid');

                expect(and.validatables[2].valid).toBe(true);
                expect(and.validatables[2].message).toBe('address valid');

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });


            it(`or validation `, () => {

                let or = new Map(value, validator,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>Or(v)
                );

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message).toBe('11 valid');
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message).toBe('name invalid');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2].message).toBe('address valid');
                expect(or.validatables[2].valid).toBe(true);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);

            });
        });


        describe("partial", function() {

            it(`and validation`, () => {

                let and = new Map(value, validator,
                    (value, validators) => <(Validatable & Message<string>)[]>ValidateValue(value, validators, true),
                    (v)=>And(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message).toBe('11 valid');

                expect(and.validatables[1].valid).toBe(false);
                expect(and.validatables[1].message).toBe('name invalid');

                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);
            });


            it(`or validation `, () => {

                let or = new Map(value, validator,
                    (value, validators) => <(Validatable & Message<string>)[]>ValidateValue(value, validators, true),
                    (v)=>Or(v)
                );

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message).toBe('11 valid');
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message).toBe('name invalid');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2]).toBe(<any>undefined);
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

        type Type = [
            object,
            object,
            object,
        ]

        let validator : TypeValidator = [
            new Validator('string'),
            new Validator('number'),
            new Validator('string'),
        ];

        let value : Type = [{}, {}, {}];

        describe("complete", function() {
            it(`and validation`, () => {

                let and = new Map(value, validator,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>And(v)
                );

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

                let or = new Map(value, validator,
                    (value, validators) => ValidateValue(value, validators, false),
                    (v)=>Or(v)
                );

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

                let and = new Map(value, validator,
                    (value, validators) => <(Validatable & Message<string>)[]>ValidateValue(value, validators, true),
                    (v)=>And(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(false);
                expect(and.validatables[0].message).toBe('[object Object] invalid');

                expect(and.validatables[1]).toBe(<any>undefined);
                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);
            });

            it(`or validation `, () => {

                let or = new Map(value, validator,
                    (value, validators) => <(Validatable & Message<string>)[]>ValidateValue(value, validators, true),
                    (v)=>Or(v)
                );

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(or.validatables[0].message).toBe('[object Object] invalid');
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1]).toBe(<any>undefined);
                expect(or.validatables[2]).toBe(<any>undefined);
                expect(or.validatables[3]).toBe(<any>undefined);
            });
        });
    });
});

import Map from "../../dist/validatable/map-callback";
import Standard from "../../dist/validator/return/list/standard";
import And from "../../dist/validatable/and";
import Or from "../../dist/validatable/or";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import MessageMap from "../../dist/message/message/list/map";
import ValidatorType from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/parameter/instance/instance";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("explicit typed", function() {

        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        type Type = [
            string,
            string,
        ];

        let validator : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value : Type = [
            'name',
            'address',
        ];

        describe("auto", function() {

            let validatable = new Map(value, validator,
                (value, validators) => Standard(value, validators, false),
                And,
                (v)=>MessageMap(v)
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
                (value, validators) =>
                    <(Validatable & ValueInterface & Message<string>)[]>Standard(value, validators, true),
                And,
                (v)=>MessageMap(v)
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
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value  = [
            'name',
            'address',
        ];


        describe("auto", function() {

            let validatable = new Map(value, validator,
                (value, validators) => Standard(value, validators, false),
                And, (v)=>MessageMap(v)
            );

            let unknown : unknown = validatable.value;

            let value1 : string[] = validatable.value;

            // @ts-expect-error
            let value2 : [string, string] = validatable.value;

            let instance : Validatable;
            instance = validatable.validatables[0];
            instance = validatable.validatables[1];
            instance = validatable.validatables[3];
            instance = validatable.validatables[4];
        });

        describe("auto partial", function() {

            let validatable = new Map(value, validator,
                (value, validators) =>
                    <(Validatable & ValueInterface & Message<string>)[]>Standard(value, validators, true),
                And, (v)=>MessageMap(v)
            );

            let unknown : unknown = validatable.value;

            let value1 : string[] = validatable.value;

            // @ts-expect-error
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
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        type Type = [
            string,
            string,
            string,
        ]

        let validator : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        let value : Type = [
            'user',
            'name',
            'address',
        ];

        describe("complete", function() {

            it(`and validation`, () => {

                let validatable = new Map(value, validator,
                    (value, validators) => Standard(value, validators, false),
                    And, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('value is type of "string"');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validatable = new Map(value, validator,
                    (value, validators) => Standard(value, validators, false),
                    Or, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('value is type of "string"');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

        });

        describe("partial", function() {

            it(`and validation`, () => {

                let validatable = new Map(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>Standard(value, validators, true),
                    And, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('value is type of "string"');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });

            it(`or validation`, () => {

                let validatable = new Map(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>Standard(value, validators, true),
                    Or, (v)=>MessageMap(v)
                );

                expect(validatable.valid).toBe(true);
                expect(validatable.value).toBe(value);

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('value is type of "string"');

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(validatable.validatables[3]).toBe(undefined);
            });
        });

    });

    describe("mixed", function() {


        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, number, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        type Type = [
            string,
            string,
            string,
        ]

        let validator : TypeValidator= [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
        ];

        let value : Type = [
            "11",
            'name',
            'address',
        ];

        describe("complete", function() {

            it(`and validation`, () => {

                let and = new Map(value, validator,
                    (value, validators) => Standard(value, validators, false),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message).toBe('value is type of "string"');

                expect(and.validatables[1].valid).toBe(false);
                expect(and.validatables[1].message).toBe('value is not type of "number"');

                expect(and.validatables[2].valid).toBe(true);
                expect(and.validatables[2].message).toBe('value is type of "string"');

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });


            it(`or validation `, () => {

                let or = new Map(value, validator,
                    (value, validators) => Standard(value, validators, false),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message).toBe('value is type of "string"');
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message).toBe('value is not type of "number"');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2].message).toBe('value is type of "string"');
                expect(or.validatables[2].valid).toBe(true);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);

            });
        });


        describe("partial", function() {

            it(`and validation`, () => {

                let and = new Map(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>Standard(value, validators, true),
                    (v)=>And(v), (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toBe(value);

                expect(and.validatables[0].valid).toBe(true);
                expect(and.validatables[0].message).toBe('value is type of "string"');

                expect(and.validatables[1].valid).toBe(false);
                expect(and.validatables[1].message).toBe('value is not type of "number"');

                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);
            });


            it(`or validation `, () => {

                let or = new Map(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>Standard(value, validators, true),
                    (v)=>Or(v), (v)=>MessageMap(v)
                );

                expect(or.valid).toBe(true);
                expect(or.value).toBe(value);

                expect(or.validatables[0].message).toBe('value is type of "string"');
                expect(or.validatables[0].valid).toBe(true);

                expect(or.validatables[1].message).toBe('value is not type of "number"');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2]).toBe(<any>undefined);
                expect(or.validatables[3]).toBe(<any>undefined);

            });
        });
    });

    describe("all invalid", function() {

        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, number, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        type Type = [
            object,
            object,
            object,
        ]

        let validator : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
        ];

        let value : Type = [{}, {}, {}];

        describe("complete", function() {
            it(`and validation`, () => {

                let and = new Map(value, validator,
                    (value, validators) => Standard(value, validators, false),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].message).toBe('value is not type of "string"');
                expect(and.validatables[0].valid).toBe(false);

                expect(and.validatables[1].message).toBe('value is not type of "number"');
                expect(and.validatables[1].valid).toBe(false);

                expect(and.validatables[2].message).toBe('value is not type of "string"');
                expect(and.validatables[2].valid).toBe(false);

                // @ts-expect-error
                expect(and.validatables[3]).toBe(undefined);
            });

            it(`or validation `, () => {

                let or = new Map(value, validator,
                    (value, validators) => Standard(value, validators, false),
                    (v)=>Or(v),
                    (v)=>MessageMap(v)
                );

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(or.validatables[0].message).toBe('value is not type of "string"');
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1].message).toBe('value is not type of "number"');
                expect(or.validatables[1].valid).toBe(false);

                expect(or.validatables[2].message).toBe('value is not type of "string"');
                expect(or.validatables[2].valid).toBe(false);

                // @ts-expect-error
                expect(or.validatables[3]).toBe(undefined);
            });
        });


        describe("partial", function() {
            it(`and validation`, () => {

                let and = new Map(value, validator,
                    (value, validators) => <(Validatable & ValueInterface & Message<string>)[]>Standard(value, validators, true),
                    (v)=>And(v),
                    (v)=>MessageMap(v)
                );

                expect(and.valid).toBe(false);
                expect(and.value).toEqual(value);

                expect(and.validatables[0].valid).toBe(false);
                expect(and.validatables[0].message).toBe('value is not type of "string"');

                expect(and.validatables[1]).toBe(<any>undefined);
                expect(and.validatables[2]).toBe(<any>undefined);
                expect(and.validatables[3]).toBe(<any>undefined);
            });

            it(`or validation `, () => {

                let or = new Map(value, validator,
                    (value, validators) =>
                        <(Validatable & ValueInterface & Message<string>)[]>Standard(value, validators, true),
                    (v)=>Or(v),
                    MessageMap
                );

                expect(or.valid).toBe(false);
                expect(or.value).toEqual(value);

                expect(or.validatables[0].message).toBe('value is not type of "string"');
                expect(or.validatables[0].valid).toBe(false);

                expect(or.validatables[1]).toBe(<any>undefined);
                expect(or.validatables[2]).toBe(<any>undefined);
                expect(or.validatables[3]).toBe(<any>undefined);
            });
        });
    });
});

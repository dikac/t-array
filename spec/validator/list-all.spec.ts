import ValidatorType from "@dikac/t-type/validator/type-standard";
import ListAll from "../../dist/validator/list-all";
import And from "../../dist/validatable/and";
import Validatable from "@dikac/t-validatable/validatable";
import MessageMap from "../../dist/message/message/list/map";
import ValidatablesInterface from "../../dist/validatable/validatables/validatables";
import Validatables from "../../dist/validatable/validatables/validatables";
import SimpleValidator from "@dikac/t-validator/simple";
import Or from "../../dist/validatable/or";
import Instance from "@dikac/t-validator/validatable/validatable";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("implicit partial", function() {

        let validator = ValidatorType('string');

        let value = [
            'name',
            'address',
        ];

        let property = ListAll(validator, (v)=>And(v), MessageMap);

        let validatable = property.validate(<[string, string]>value);

        let key : Validatable;

        key = validatable.validatables[0];

        key = validatable.validatables[1];

        key = validatable.validatables[2];

        let validatables : ValidatablesInterface = validatable;

        let record : Validatable[] = validatable.validatables;

        let validatable1 : Validatables = validatable;

        let unknown : unknown = validatable.value;


        let string : string[] = validatable.value;
        let string2 : [string, string] = validatable.value;


        describe("recursive", function() {

            let validator = ValidatorType('string');

            let value = [
                'name',
                'address',
            ];

            let list1 = ListAll(validator, And, MessageMap);
            let list2 = ListAll(list1, And, MessageMap);
            let list3 = ListAll(list2, And, MessageMap);

        });
    });

    describe("explicit", function() {

        type TypeValidator = SimpleValidator<any, string, Instance<any, string>>;

        let validator : TypeValidator = ValidatorType('string');

        type Type = [
            string,
            string,
        ];

        let value : Type = [
            'name',
            'address',
        ];

        describe("auto", function() {

            let property = ListAll/*<unknown[], Type>*/(validator, And, MessageMap);

            let validatable = property.validate(value);

            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];

            key = validatable.validatables[2];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : Type = validatable.value;

        });

        describe("direct", function() {

            let property = ListAll(validator, And, MessageMap);

            let validatable = property.validate(value);


            let key : Validatable;

            key = validatable.validatables[0];

            key = validatable.validatables[1];

            key = validatable.validatables[2];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let validatable1 : Validatables = validatable;

            let unknown : unknown = validatable.value;

            let string : Type|unknown[] = validatable.value;


        });
    });
});





describe("all valid", function() {

    let validator = ValidatorType('string');

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = ListAll(validator, And, MessageMap);
        let validatable = property.validate(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(true);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(true);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 2 should exits')
        }
    });

    it(`check handler and`, () => {

        let property = ListAll(validator, And, MessageMap);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

    it(`check handler or`, () => {

        let property = ListAll(validator, Or, MessageMap);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

});

describe("mixed", function() {

    let validator = ValidatorType('string');

    let value = [
        'user',
        1,
        'address',
    ];

    it(`check validate return`, () => {

        let property = ListAll(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(true);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 0 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(true);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 2 should exits')
        }

    });

    it(`check handler and`, () => {

        let property = ListAll(validator,(v)=>And(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

    it(`check handler or`, () => {

        let property = ListAll(validator,(v)=>Or(<Validatable[]>v), MessageMap);
        let validatable = property.validate(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);
    });

});

describe("all invalid", function() {

    let validator = ValidatorType('number');

    let value = [
        'user',
        'name',
        'address',
    ];

    it(`check validate return`, () => {

        let property = ListAll(validator, And, MessageMap);
        let validatable = property.validate(value);

        if(validatable.validatables[0]) {
            expect(validatable.validatables[0].valid).toBe(false);
            expect(typeof validatable.validatables[0].message).toBe('string');
        } else {
            fail('index 1 should exits')
        }

        if(validatable.validatables[1]) {
            expect(validatable.validatables[1].valid).toBe(false);
            expect(typeof validatable.validatables[1].message).toBe('string');
        } else {
            fail('index 2 should not exits')
        }

        if(validatable.validatables[2]) {
            expect(validatable.validatables[2].valid).toBe(false);
            expect(typeof validatable.validatables[2].message).toBe('string');
        } else {
            fail('index 3 should not exits')
        }
    });

    it(`check handler and`, () => {

        let property = ListAll(validator, And, MessageMap);
        let validatable = property.validate(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

    it(`check handler or`, () => {

        let property = ListAll(validator, Or, MessageMap);
        let validatable = property.validate(value);

        expect<boolean>(validatable.valid).toBe(false);
        expect(validatable.value).toBe(value);
    });

});


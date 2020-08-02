import Value from "../../dist/validator/value";
import And from "../../dist/validatable/and";
import ValidatablesInterface from "../../dist/validatable/validatables/validatables";
import Validatables from "../../dist/validatable/validatables/validatables";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorInterface from "@dikac/t-validator/validator";
import MessageMap from "../../dist/message/message/list/map";
import ValidatorType from "@dikac/t-type/validator/type-standard";
import Instance from "@dikac/t-validator/parameter/instance/instance";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("explicit type", function() {

        type TypeValidator = [
            ValidatorInterface<any, string, Instance<any, string>>,
            ValidatorInterface<any, string, Instance<any, string>>,
        ];

        let validator : TypeValidator = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        describe("complete", function() {

            let property = new Value<any, string, TypeValidator>(validator, (v)=>And(<Validatable[]>v), (v)=>MessageMap(v));

            let validatable = property.validate('data');

            let key : Validatable = validatable[0];

            let validatables : Validatables = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables<Validatable[] > = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });

        describe("auto", function() {

            let property = new Value(validator, (v)=>And(v), (v)=>MessageMap(v));

            let validatable = property.validate('data');

            let key : Validatable = validatable[0];

            let validatables : ValidatablesInterface = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables<Validatable[]> = validatable;

            let unknown : unknown = validatable.value;

            // @ts-expect-error
            let string : string = validatable.value;

        });
    });

    describe("implicit type", function() {

        let validator  = [
            ValidatorType('string'),
            ValidatorType('string'),
        ];

        describe("complete", function() {

            let property = new Value<string>(validator, (v)=>And(v), (v)=>MessageMap(v));

            let validatable = property.validate('data');
            validatable.value

            let key : Validatable = validatable.validatables[0];

            let validatables : Validatables = validatable;

            let record : Validatable[] = validatable.validatables;

            let and : Validatables<Validatable[]> = validatable;

            let unknown : unknown = validatable.value;

            let string : string = validatable.value;

        });

        describe("auto", function() {

            let property = new Value(validator, (v)=>And(v), (v)=>MessageMap(v));

            let validatable = property.validate('data');

            let key : Validatable = validatable[0];

            let validatables : Validatables = validatable;


            let record : Validatable[] = validatable.validatables;

            let and : Validatables<Validatable[]> = validatable;

            let unknown : unknown = validatable.value;

            // @ts-expect-error
            let string : string = validatable.value;

        });
    });
});


describe("all valid", function() {


    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
    ];

    describe("complete", function() {

        let property = new Value(validator, (v)=>And(<Validatable[]>v), (v)=>MessageMap(v));

        let validatable = property.validate('data');

        it('value', ()=>{
            expect(validatable.value).toBe('data');
            expect(validatable.valid).toBe(true);
        });

        it('index 0', ()=>{

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

            } else {

                fail('index 0 should exits')
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(true);
                expect(validatable.validatables[1].message).toBe('value is type of "string"');

            } else {

                fail('index 1 should exits')
            }
        });

        it('index 2', ()=>{

            if(validatable.validatables[2]) {

                expect(validatable.validatables[2].valid).toBe(true);
                expect(validatable.validatables[2].message).toBe('value is type of "string"');

            } else {

                fail('index 2 should exits')
            }
        });

    });

});


describe("mixed", function() {


    let validator  = [
        ValidatorType('string'),
        ValidatorType('number'),
        ValidatorType('string'),
    ];

    describe("complete", function() {

        let property = new Value(validator,
            (v)=>And(v),
            (v)=>MessageMap(v)
        );

        let validatable = property.validate('data');

        it('value', ()=>{
            expect(validatable.value).toBe('data');
            expect(validatable.valid).toBe(false);
        });

        it('index 0', ()=>{

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(true);
                expect(validatable.validatables[0].message).toBe('value is type of "string"');

            } else {

                fail('index 0 should exits')
            }
        });

        it('index 1', ()=>{

            if(validatable.validatables[1]) {

                expect(validatable.validatables[1].valid).toBe(false);
                expect(validatable.validatables[1].message).toBe('value is not type of "number"');

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
        ValidatorType('number'),
        ValidatorType('number'),
        ValidatorType('number'),
    ];

    let property = new Value(validator, And, MessageMap);

    let validatable = property.validate('data');

    it('value', ()=>{
        expect(validatable.value).toBe('data');
        expect(validatable.valid).toBe(false);
    });

    it('index 0', ()=>{

        if(validatable.validatables[0]) {

            expect(validatable.validatables[0].valid).toBe(false);
            expect(validatable.validatables[0].message).toBe('value is not type of "number"');

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



describe('recursive', ()=>{

    describe("all valid", function() {

        let validator  = [
            ValidatorType('string'),
            ValidatorType('string'),
            ValidatorType('string'),
            new Value([
                ValidatorType('string'),
                ValidatorType('string'),
            ], And, MessageMap)
        ];

        describe("complete", function() {

            let property = new Value(validator, And, MessageMap);

            let validatable = property.validate('data');

            it('value', ()=>{
                expect(validatable.value).toBe('data');
                expect(validatable.valid).toBe(true);
            });

            it('index 0', ()=>{

                if(validatable.validatables[0]) {

                    expect(validatable.validatables[0].valid).toBe(true);
                    expect(validatable.validatables[0].message).toBe('value is type of "string"');

                } else {

                    fail('index 0 should exits')
                }
            });

            it('index 1', ()=>{

                if(validatable.validatables[1]) {

                    expect(validatable.validatables[1].valid).toBe(true);
                    expect(validatable.validatables[1].message).toBe('value is type of "string"');

                } else {

                    fail('index 1 should exits')
                }
            });

            it('index 2', ()=>{

                if(validatable.validatables[2]) {

                    expect(validatable.validatables[2].valid).toBe(true);
                    expect(validatable.validatables[2].message).toBe('value is type of "string"');

                } else {

                    fail('index 2 should exits')
                }
            });

            it('index 3.0', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {

                    // @ts-expect-error
                    expect(validatable.validatables[3].validatables[0].valid).toBe(true);
                    // @ts-expect-error
                    expect(validatable.validatables[3].validatables[0].message).toBe('value is type of "string"');

                } else {

                    fail('index 2 should exits')
                }
            });

            it('index 3.1', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[1]) {

                    // @ts-expect-error
                    expect(validatable.validatables[3].validatables[1].valid).toBe(true);
                    // @ts-expect-error
                    expect(validatable.validatables[3].validatables[1].message).toBe('value is type of "string"');

                } else {

                    fail('index 2 should exits')
                }
            });

            it('index 3.2', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                    fail('index 2 should not exits')
                }
            });

        });

    });


    describe("mixed", function() {

        let validator  = [
            ValidatorType('string'),
            ValidatorType('number'),
            ValidatorType('string'),
            new Value([
                ValidatorType('string'),
                ValidatorType('string'),
            ], And, MessageMap)
        ];

        describe("complete", function() {

            let property = new Value(validator, And, MessageMap);

            let validatable = property.validate('data');

            it('value', ()=>{
                expect(validatable.value).toBe('data');
                expect(validatable.valid).toBe(false);
            });

            it('index 0', ()=>{

                if(validatable.validatables[0]) {

                    expect(validatable.validatables[0].valid).toBe(true);
                    expect(validatable.validatables[0].message).toBe('value is type of "string"');

                } else {

                    fail('index 0 should exits')
                }
            });

            it('index 1', ()=>{

                if(validatable.validatables[1]) {

                    expect(validatable.validatables[1].valid).toBe(false);
                    expect(validatable.validatables[1].message).toBe('value is not type of "number"');

                } else {

                    fail('index 1 should exits')
                }
            });

            it('index 2', ()=>{

                if(validatable.validatables[2]) {

                    fail('index 2 should not exits')
                }
            });


            it('index 3.0', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[0]) {

                    fail('should no exits')
                }
            });

            it('index 3.1', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[1]) {

                    fail('should exits')
                }
            });

            it('index 3.2', ()=>{

                // @ts-expect-error
                if(validatable.validatables[3] && validatable.validatables[3].validatables[2]) {

                    fail('should exits')
                }
            });

    });

    describe("all invalid", function() {

        let validator  = [
            ValidatorType('number'),
            ValidatorType('number'),
            ValidatorType('number'),
            new Value([
                ValidatorType('number'),
                ValidatorType('number'),
            ], And, MessageMap)
        ];

        let property = new Value(validator, And, MessageMap);

        let validatable = property.validate('data');

        it('value', ()=>{
            expect(validatable.value).toBe('data');
            expect(validatable.valid).toBe(false);
        });

        it('index 0', ()=>{

            if(validatable.validatables[0]) {

                expect(validatable.validatables[0].valid).toBe(false);
                expect(validatable.validatables[0].message).toBe('value is not type of "number"');

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


        it('index 3.0', ()=>{

            if(validatable.validatables[3]) {

                fail('should not exits')
            }
        });

        it('index 3.1', ()=>{

            if(validatable.validatables[3]) {

                fail('should not exits')
            }
        });

        it('index 3.2', ()=>{

            if(validatable.validatables[3]) {

                fail('should not exists')
            }
        });
    });

    });

})

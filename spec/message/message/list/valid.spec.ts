import ValidatorType from "@dikac/t-type/validator/type-standard";
import ValueAll from "../../../../dist/validator/value-all";
import And from "../../../../dist/validatable/and";
import MessageMapValid from "../../../../dist/message/message/list/valid";
import Value from "../../../../dist/validator/value";
import ValidateValue from "../../../../dist/validator/return/list/value";
import MapAll from "../../../../dist/validator/map-all";
import Map from "../../../../dist/validator/map";
import Validatable from "@dikac/t-validatable/validatable";
import ValueCallback from "../../../../dist/validator/value-callback";
import MapMessage from "../../../../dist/validator/map-callback";
import Standard from "../../../../dist/validator/return/list/standard";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('value all', ()=>{

    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
        new ValueAll([
            ValidatorType('string'),
            ValidatorType('string'),
        ], (v)=>And(v), MessageMapValid)
    ];

    let property = new ValueAll(validator, And, MessageMapValid);

});

describe('value', ()=>{

    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
        new Value([
            ValidatorType('string'),
            ValidatorType('string'),
        ], And, MessageMapValid)
    ];

        let property = new Value(validator, And, MessageMapValid);

});

describe('value callback', ()=>{

    let validators  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
        new ValueCallback([
                ValidatorType('string'),
                ValidatorType('string'),
            ],
            (value, validators) => ValidateValue(value, validators, false),
            And, (v)=>MessageMapValid(v))
    ];

    let validator = new ValueCallback(validators,
        (value, validators) => ValidateValue(value, validators, false),
        And, MessageMapValid
    );

});














describe('map all', ()=>{

    let validator = [
        ValidatorType('number'),
        ValidatorType('number'),
        ValidatorType('number'),
        MapAll([
            ValidatorType('number'),
            ValidatorType('number'),
        ], (v)=>And(v), MessageMapValid)
    ];

    let property = MapAll(validator,And, MessageMapValid);

});

describe('map', ()=>{

    let validator = [
        ValidatorType('number'),
        ValidatorType('number'),
        ValidatorType('number'),
        Map([
            ValidatorType('number'),
            ValidatorType('number')
        ],(v)=>And(<Validatable[]>v), MessageMapValid)
    ];

    let property = Map(validator, And, MessageMapValid);
});

describe('map callback', ()=>{

    let validators = [
        ValidatorType('string'),
        ValidatorType('number'),
        ValidatorType('string'),
        MapMessage([
            ValidatorType('string'),
            ValidatorType('number'),
        ], (value, validators) => Standard(value, validators, false), And, MessageMapValid)
    ];

    let validator = MapMessage(validators,
        (value, validators) => Standard(value, validators, false),
        (v)=>And(v),
        (v)=>MessageMapValid(v)
    );

});

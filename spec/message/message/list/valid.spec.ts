import ValidatorType from "@dikac/t-type/validator/type-standard";
import ValueAll from "../../../../dist/validator/value";
import And from "../../../../dist/validatable/and";
import MessageMapValid from "../../../../dist/message/message/list/valid";
import Value from "../../../../dist/validator/value-partial";
import ValidateValue from "../../../../dist/validator/validatable/list/value";
import MapAll from "../../../../dist/validator/map";
import Map from "../../../../dist/validator/map-partial";
import Validatable from "@dikac/t-validatable/validatable";
import ValueCallback from "../../../../dist/validator/value-callback";
import MapCallbackFunction from "../../../../dist/validator/map-callback-function";
import Standard from "../../../../dist/validator/validatable/list/map";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('value all', ()=>{

    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
        ValueAll([
            ValidatorType('string'),
            ValidatorType('string'),
        ], And, MessageMapValid)
    ];

    let property = ValueAll(validator, And, MessageMapValid);

});

describe('value', ()=>{

    let validator  = [
        ValidatorType('string'),
        ValidatorType('string'),
        ValidatorType('string'),
        Value([
            ValidatorType('string'),
            ValidatorType('string'),
        ], And, MessageMapValid)
    ];

        let property = Value(validator, And, MessageMapValid);

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
            ValidateValue, And, (v)=>MessageMapValid(v))
    ];

    let validator = new ValueCallback(validators, ValidateValue, And, MessageMapValid);

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
        MapCallbackFunction([
            ValidatorType('string'),
            ValidatorType('number'),
        ], Standard, And, MessageMapValid)
    ];

    let validator = MapCallbackFunction(validators, Standard, And, MessageMapValid);

});

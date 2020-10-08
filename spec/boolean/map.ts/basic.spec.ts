import Map from "../../../dist/boolean/map";
import Type from "@dikac/t-type/boolean/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("valid", function() {

    let values = [
        [1],
        ['1'],
        [true]
    ];

    let validations = [
        (v)=>Type(v, 'number'),
        (v)=>Type(v, 'string'),
        (v)=>Type(v, 'boolean'),
    ]

    expect(Map(values, validations)).toBe(true);
});


it("invalid", function() {

    let values = [
        [1],
        ['1'],
        [1]
    ];

    let validations = [
        (v)=>Type(v, 'number'),
        (v)=>Type(v, 'string'),
        (v)=>Type(v, 'boolean'),
    ]

    expect(Map(values, validations)).toBe(false);

});

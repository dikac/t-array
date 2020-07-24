import MapStandard from "../../../dist/validatable/list/map-standard";
import Num from "../../validator/num";
import ExtendedNum from "../../validator/extended-num";
import ExtendedNumAny from "../../validator/extended-num-any";
import ExtendedStr from "../../validator/extended-str";
import ExtendedStrAny from "../../validator/extended-str-any";
import NumAny from "../../validator/num-any";
import Str from "../../validator/str";
import StrAny from "../../validator/str-any";


it("force console log", () => spyOn(console, 'log').and.callThrough());

describe("simple validatable", function() {

    let validator = [
        new Num(),
        new NumAny(),
        new Str(),
        new StrAny(),
        new Num(),
        new NumAny(),
        new Str(),
        new StrAny(),
    ];

    let value = [
        10,
        10,
        'str',
        'str',
        10,
        'str',
        'str',
        10,
    ];

    let result = MapStandard(value, validator, false);
    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator4', ()=> expect(result[2].valid).toBe(true));
    it('match validator5', ()=> expect(result[3].valid).toBe(true));
    it('match validator7', ()=> expect(result[4].valid).toBe(true));
    it('match validator8', ()=> expect(result[5].valid).toBe(false));
    it('match validator10', ()=> expect(result[6].valid).toBe(true));
    it('match validator11', ()=> expect(result[7].valid).toBe(false));

});


describe("simple validatable", function() {

    let validator = [
        new Num(),
        new NumAny(),
        new Str(),
        new StrAny(),
        new Num(),
        new NumAny(),
        new Str(),
        new StrAny()
        ,
    ];

    let value = [
        10,
        10,
        'str',
        'str',
        10,
        'str',
        'str',
        10,
    ];

    let result = MapStandard(value, validator, false);
    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator4', ()=> expect(result[2].valid).toBe(true));
    it('match validator5', ()=> expect(result[3].valid).toBe(true));
    it('match validator7', ()=> expect(result[4].valid).toBe(true));
    it('match validator8', ()=> expect(result[5].valid).toBe(false));
    it('match validator10', ()=> expect(result[6].valid).toBe(true));
    it('match validator11', ()=> expect(result[7].valid).toBe(false));

});


describe("extended validatable", function() {

    let validator = [
        new ExtendedNum(),
        new ExtendedNumAny(),
        new ExtendedStr(),
        new ExtendedStrAny(),
        new ExtendedNum(),
        new ExtendedNumAny(),
        new ExtendedStr(),
        new ExtendedStrAny(),
    ];

    let value = [
        10,
        10,
        'str',
        'str',
        10,
        'str',
        'str',
        10,

    ];

    let result = MapStandard(value, validator, false);

    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator1', ()=> expect(result[0].message).toBe('ExtendedNum'));
    it('match validator1', ()=> expect(result[0].value).toBe(10));

    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].message).toBe('ExtendedNumAny'));
    it('match validator2', ()=> expect(result[1].value).toBe(10));

    it('match validator4', ()=> expect(result[2].valid).toBe(true));
    it('match validator4', ()=> expect(result[2].message).toBe('ExtendedStr'));
    it('match validator4', ()=> expect(result[2].value).toBe('str'));

    it('match validator5', ()=> expect(result[3].valid).toBe(true));
    it('match validator5', ()=> expect(result[3].message).toBe('ExtendedStrAny'));
    it('match validator5', ()=> expect(result[3].value).toBe('str'));

    it('match validator7', ()=> expect(result[4].valid).toBe(true));
    it('match validator7', ()=> expect(result[4].message).toBe('ExtendedNum'));
    it('match validator7', ()=> expect(result[4].value).toBe(10));

    it('match validator8', ()=> expect(result[5].valid).toBe(false));
    it('match validator8', ()=> expect(result[5].message).toBe('ExtendedNumAny'));
    it('match validator8', ()=> {

        try {

            let value = result[5].value;
            fail('exception should be thrown')

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('Validatable "ReadonlyMerge" is not valid');
        }
    });

    it('match validator10', ()=> expect(result[6].valid).toBe(true));
    it('match validator10', ()=> expect(result[6].message).toBe('ExtendedStr'));
    it('match validator10', ()=> expect(result[6].value).toBe('str'));

    it('match validator11', ()=> expect(result[7].valid).toBe(false));
    it('match validator11', ()=> expect(result[7].message).toBe('ExtendedStrAny'));
    it('match validator11', ()=> {

        try {

            let value = result[7].value;
            fail('exception should be thrown')

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('Validatable "ReadonlyMerge" is not valid');
        }

       // expect(result.validator6.validator9.validator11.value).toBe(10)
    });


});

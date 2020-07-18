import CallValidator from "../../../dist/validator/validatable/recursive/value";
import Num from "../num";
import ExtendedNum from "../extended-num";
import ExtendedNumAny from "../extended-num-any";
import ExtendedStr from "../extended-str";
import ExtendedStrAny from "../extended-str-any";
import NumAny from "../num-any";
import Str from "../str";
import StrAny from "../str-any";


it("force console log", () => spyOn(console, 'log').and.callThrough());

describe("simple validatable", function() {

    let validator = [
        new Num(),
        new NumAny(),
        [   new Str(),
            new StrAny()
        ],
        [   new Num(),
            new NumAny(),
            [   new Str(),
                new StrAny()
            ],
        ]
    ];

    let value = 10;

    let result = CallValidator<any, typeof validator>(validator, value);
    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator4', ()=> expect(result[2][0].valid).toBe(false));
    it('match validator5', ()=> expect(result[2][1].valid).toBe(false));
    it('match validator7', ()=> expect(result[3][0].valid).toBe(true));
    it('match validator8', ()=> expect(result[3][1].valid).toBe(true));
    it('match validator10', ()=> expect(result[3][2][0].valid).toBe(false));
    it('match validator11', ()=> expect(result[3][2][1].valid).toBe(false));

});


describe("simple validatable", function() {

    let validator = [
        new Num(),
        new NumAny(),
        [   new Str(),
            new StrAny()
        ],
        [   new Num(),
            new NumAny(),
            [   new Str(),
                new StrAny()
            ],
        ]
    ];

    let value = 'str';

    let result = CallValidator<any, typeof validator>(validator, value);
    it('match validator1', ()=> expect(result[0].valid).toBe(false));
    it('match validator2', ()=> expect(result[1].valid).toBe(false));
    it('match validator4', ()=> expect(result[2][0].valid).toBe(true));
    it('match validator5', ()=> expect(result[2][1].valid).toBe(true));
    it('match validator7', ()=> expect(result[3][0].valid).toBe(false));
    it('match validator8', ()=> expect(result[3][1].valid).toBe(false));
    it('match validator10', ()=> expect(result[3][2][0].valid).toBe(true));
    it('match validator11', ()=> expect(result[3][2][1].valid).toBe(true));

});


describe("extended validatable", function() {

    let validator = [
        new ExtendedNum(),
        new ExtendedNumAny(),
        [   new ExtendedStr(),
            new ExtendedStrAny()
        ],
        [   new ExtendedNum(),
            new ExtendedNumAny(),
            [   new ExtendedStr(),
                new ExtendedStrAny()
            ],
        ]
    ];

    let value = 10;

    let result = CallValidator<any, typeof validator>(validator, value);

    it('match validator1', ()=> expect(result[0].valid).toBe(true));
    it('match validator1', ()=> expect(result[0].message).toBe('ExtendedNum'));
    it('match validator1', ()=> expect(result[0].value).toBe(10));

    it('match validator2', ()=> expect(result[1].valid).toBe(true));
    it('match validator2', ()=> expect(result[1].message).toBe('ExtendedNumAny'));
    it('match validator2', ()=> expect(result[1].value).toBe(10));

    it('match validator4', ()=> expect(result[2][0].valid).toBe(false));
    it('match validator4', ()=> expect(result[2][0].message).toBe('ExtendedStr'));
    it('match validator4', ()=> expect(result[2][0].value).toBe(10));

    it('match validator5', ()=> expect(result[2][1].valid).toBe(false));
    it('match validator5', ()=> expect(result[2][1].message).toBe('ExtendedStrAny'));
    it('match validator5', ()=> {

        try {

            let value = result[2][1].value;
            fail('exception should be thrown')

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('ExtendedStrAny');
        }
    });

    it('match validator7', ()=> expect(result[3][0].valid).toBe(true));
    it('match validator7', ()=> expect(result[3][0].message).toBe('ExtendedNum'));
    it('match validator7', ()=> expect(result[3][0].value).toBe(10));

    it('match validator8', ()=> expect(result[3][1].valid).toBe(true));
    it('match validator8', ()=> expect(result[3][1].message).toBe('ExtendedNumAny'));
    it('match validator8', ()=> expect(result[3][1].value).toBe(10));

    it('match validator10', ()=> expect(result[3][2][0].valid).toBe(false));
    it('match validator10', ()=> expect(result[3][2][0].message).toBe('ExtendedStr'));
    it('match validator10', ()=> expect(result[3][2][0].value).toBe(10));

    it('match validator11', ()=> expect(result[3][2][1].valid).toBe(false));
    it('match validator11', ()=> expect(result[3][2][1].message).toBe('ExtendedStrAny'));
    it('match validator11', ()=> {

        try {

            let value = result[3][2][1].value;
            fail('exception should be thrown')

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('ExtendedStrAny');
        }

       // expect(result.validator6.validator9.validator11.value).toBe(10)
    });


});

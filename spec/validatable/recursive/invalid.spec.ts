import Invalid from "../../../dist/validatable/recursive/invalid";
import Validatable from "@dikac/t-validatable/validatable";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

let record : [
    Validatable,
    Validatable,
    [
        Validatable,
        Validatable,
    ],
    [
        Validatable,
        Validatable,
    ],
    [
        Validatable,
        Validatable,
    ]
]= [
    {valid:true},
    {valid:false},
    [
        {valid:true},
        {valid:true},
    ],
    [
        {valid:false},
        {valid:false},
    ],
    [
        {valid:true},
        {valid:false},
    ]
];

describe("check property", function() {

    let result = Invalid(record);

    it("invalid", () => {

        if(result[1]) {

            expect(result[1].valid).toBe(false);

        } else {

            fail('property is not exits')
        }
    });

    it("valid", () => {

        expect(result[0]).toBeUndefined();
    });

    describe("invalids", () => {

        it("valid1", () => {

            if(result[3] && result[3][0]) {

                expect(result[3][0].valid).toBe(false);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result[3] && result[3][1]) {

                expect(result[3][1].valid).toBe(false);

            } else {

                fail('property is not exits')
            }
        });
    });

    it("mixed", () => {

        if(result[4]) {

            if(result[4][1]) {

                expect(result[4][1].valid).toBe(false);

            } else {

                fail('property is not exits')
            }

            expect(result[4][0]).toBeUndefined();

        } else {

            fail('property is not exits')
        }
    });



});


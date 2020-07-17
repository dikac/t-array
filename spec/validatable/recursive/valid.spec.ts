import Valid from "../../../dist/validatable/recursive/valid";
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
] = [
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

    let result = Valid(record);

    it("valid", () => {

        if(result[0]) {

            expect(result[0].valid).toBe(true);

        } else {

            fail('property is not exits')
        }
    });

    it("invalid", () => {

        expect(result[1]).toBeUndefined();
    });

    describe("valids", () => {

        it("valid1", () => {

            if(result[2] && result[2][0]) {

                expect(result[2][0].valid).toBe(true);

            } else {

                fail('property is not exits')
            }
        });

        it("valid2", () => {

            if(result[2] && result[2][1]) {

                expect(result[2][1].valid).toBe(true);

            } else {

                fail('property is not exits')
            }
        });
    });

    it("invalids", () => {

        expect(result[3]).toBeUndefined();
    });


    it("mixed", () => {

        if(result[4]) {

            if(result[4][0]) {

                expect(result[4][0].valid).toBe(true);

            } else {

                fail('property is not exits')
            }

            expect(result[4][1]).toBeUndefined();

        } else {

            fail('property is not exits')
        }
    });

});

describe("all false", function() {

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
    ] = [
        {valid:false},
        {valid:false},
        [
            {valid:false},
            {valid:false},
        ],
        [
            {valid:false},
            {valid:false},
        ],
        [
            {valid:false},
            {valid:false},
        ]
    ];

    let result = Valid(record);

    it("empty", () => {

        expect(result).toEqual([]);
    });

});

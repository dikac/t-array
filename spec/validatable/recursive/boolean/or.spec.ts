import Or from "../../../../dist/validatable/recursive/boolean/or";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it('all true', function () {

    let record = [
        {valid:true},
        [
            {valid:true},
            {valid:true},
        ],
    ];

    expect(Or(record)).toBeTrue();
});

it('all false', function () {

    let record = [
        {valid:false},
        [
            {valid:false},
            {valid:false},
        ],
    ];

    expect(Or(record)).toBeFalse();
});


it('mixed', function () {

    let record = [
        {valid:false},
        [
            {valid:true},
            {valid:false},
        ],
    ];

    expect(Or(record)).toBeTrue();
});


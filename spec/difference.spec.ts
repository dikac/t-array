import Difference from "../dist/difference";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("primitive", function() {

    let target : number[] = [1,2,3,4,5];
    let compare : number[] = [2,3,4,6];
    let difference = Difference(target, compare);
    it("valid", () => expect(difference).toEqual([1,5]));

});

describe("custom comparison", function() {

    type Data = {
        string : String,
        number : Number,
        boolean : Boolean,
    }

    let target : Data[] = [
        {
            string : new String('str1'),
            number : new Number(1),
            boolean : new Boolean(true),
        }, {
            string : new String('str2'),
            number : new Number(2),
            boolean : new Boolean(false),
        }, {
            string : new String('str3'),
            number : new Number(3),
            boolean : new Boolean(true),
        }
    ];

    let compare : Data[] = [
         {
            string : new String('str2'),
            number : new Number(2),
            boolean : new Boolean(false),
        }
    ];

    it("without", function() {

        let removed = Difference(target, compare);
        expect(target).toEqual(removed);

    });

    it("with", function() {

        let removed = Difference(target, compare, (target: Data, comparison: Data) => target.string.toString() === comparison.string.toString());
        expect(target).not.toEqual(removed);
        expect(2).toBe(removed.length);

        expect(target[0]).toEqual(removed[0]);
        expect(target[2]).toEqual(removed[1]);

    });
});

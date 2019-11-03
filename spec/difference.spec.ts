import Difference from "../dist/difference";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("primitive", function() {

    let target : number[] = [1,2,3,4,5];
    let compare : number[] = [2,3,4,6];
    let difference = Difference(target, compare);
    it("valid", () => expect(difference).toEqual([1,5]));

});

// describe("limit", function() {
//
//     let array : number[] = [1,2,3,1,5];
//     let removed = RemovesValue(array, 1, undefined, undefined, undefined, 1);
//     expect([1]).toEqual(removed);
//     expect([2,3,1,5]).toEqual(array);
//
// });

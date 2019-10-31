import RemovesValues from "../dist/removes-values";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("exists", function() {

    let array : number[] = [1,2,3,1,5];
    let removed = RemovesValues(array, [1, 5]);
    expect([1,1,5]).toEqual(removed);
    expect([2,3]).toEqual(array);

});


describe("limit", function() {

    let array : number[] = [1,2,3,1,5];
    let removed = RemovesValues(array, [1, 1], undefined, undefined, undefined, 2);
    expect([1,1]).toEqual(removed);
    expect([2,3, 5]).toEqual(array);

});
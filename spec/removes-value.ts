import RemovesValue from "../dist/removes-value";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("exists", function() {

    let array : number[] = [1,2,3,1,5];
    let removed = RemovesValue(array, 1);
    expect([1,1]).toEqual(removed);
    expect([2,3,5]).toEqual(array);

});

describe("limit", function() {

    let array : number[] = [1,2,3,1,5];
    let removed = RemovesValue(array, 1, undefined, undefined, undefined, 1);
    expect([1]).toEqual(removed);
    expect([2,3,1,5]).toEqual(array);

});

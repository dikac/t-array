import Intersection from "../dist/intersection";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("test 1", function() {


    let intersected = Intersection(undefined, [1,2],[3,1],[2,3,1]);
    it("intersected", () => expect([1]).toEqual(intersected));
});

describe("test 2", function() {

    let intersected = Intersection<any>(undefined, [1,2],[2,3,1],[2,3,"1"]);
    it("intersected", () => expect([2]).toEqual(intersected));

});

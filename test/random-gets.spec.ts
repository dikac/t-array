import RemovesValue from "../dist/random-gets";
import RandomGets from "../dist/random-gets";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("random", function() {

    let array : number[] = [0,1,2,3,4,5,6,7,8,9,10];

    for(let value of RandomGets(array)) {

        it(`value ${value}`, () => expect(array.includes(value)).toBeTrue());
    }

});



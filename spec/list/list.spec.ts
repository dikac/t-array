import Convert from "../../dist/list/map";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe('complex', () => {

    type Data = [string, number]

    let convert : Convert<Data, boolean> = [
         true,
         false,
    ]

});

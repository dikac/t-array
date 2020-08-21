import Merge from "../dist/merge";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatibility", function() {

    describe("native", function() {

        let merged : Merge<[Array<any>, Map<any, any>]> = Object.assign([], new Map());

        let map : Map<any, any> = merged;
        let array : any[] = merged;

    });

    describe("native", function() {

        class A {
            public a : string = '';
        }

        class B {
            public b : string = '';
        }

        let merged : Merge<[A, B]> = {a:'', b:''};

        let a : A = merged;
        let b : B = merged;

        // @ts-expect-error
        merged = {a:''};
        // @ts-expect-error
        merged = {b:''};
    });

});
